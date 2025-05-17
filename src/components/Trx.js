import React, { useEffect, useState } from "react";
import '../assets/styles/trx.css';
import { walletAddress } from "./config"; // Adjust the path as necessary


const Trx = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");


  const apiURL = `https://tonapi.io/v2/blockchain/accounts/${walletAddress}/transactions`;
  //const apiURL = 'https://tonapi.io/v2/accounts/{wallet}/jettons';

  // ✅ Real-Time Updates: Polling every 15 seconds
  useEffect(() => {
    fetchTransactions();
    const interval = setInterval(fetchTransactions, 15000);
    return () => clearInterval(interval);
  }, []);

  const fetchTransactions = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        const txs = data.transactions || [];
        const dpsTxs = txs.filter((tx) => tx.token === "DPS"); // Adjust this condition based on your API response
        setTransactions([...txs, ...dpsTxs]); // Combine TON and DPS transactions
        setFiltered([...txs, ...dpsTxs]);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  };

  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp * 1000);
    return dateObj.toLocaleDateString();
  };

  const formatTime = (timestamp) => {
    const dateObj = new Date(timestamp * 1000);
    return dateObj.toLocaleTimeString();
  };

  // ✅ Search Handler: Show single card view if match found
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);

    if (!keyword) {
      setFiltered(transactions);
      return;
    }

    const match = transactions.find((tx) => {
      const from = typeof tx.in_msg?.source === "string" ? tx.in_msg.source.toLowerCase() : "";
      const to = typeof tx.in_msg?.destination === "string" ? tx.in_msg.destination.toLowerCase() : "";
      const hash = typeof tx.transaction_id?.hash === "string" ? tx.transaction_id.hash.toLowerCase() : "";
      return from.includes(keyword) || to.includes(keyword) || hash.includes(keyword);
    });

    if (match) {
      setFiltered([match]);
    } else {
      setFiltered([]);
    }
  };

  // ✅ Sort by Date or Amount
  const sortTransactions = (list) => {
    return [...list].sort((a, b) => {
      if (sortBy === "amount") {
        return (b.in_msg?.value || 0) - (a.in_msg?.value || 0);
      } else {
        return b.utime - a.utime;
      }
    });
  };

  return (
    <div className="trx-container">
      <h2 className="trx-title">Token Transaction History</h2>

      {/* ✅ Search Box */}
      <input
        type="text"
        placeholder="Search by wallet, hash..."
        value={search}
        onChange={handleSearch}
        className="trx-search"
      />

      {/* ✅ Sort Options */}
      <div className="trx-sort-options">
        <button onClick={() => setSortBy("date")} className={sortBy === "date" ? "active" : ""}>
          Sort by Date
        </button>
        <button onClick={() => setSortBy("amount")} className={sortBy === "amount" ? "active" : ""}>
          Sort by Amount
        </button>
      </div>

      {/* ✅ Transaction Table */}
      <div className="trx-table-wrapper">
        <table className="trx-table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>From</th>
              <th>To</th>
              <th>Amount (TON/DPS)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sortTransactions(filtered).map((tx) => (
              <tr
                key={tx.transaction_id?.hash || tx.utime}
                className={
                  search &&
                  (typeof tx.in_msg?.source === "string" && tx.in_msg.source.toLowerCase().includes(search)) ||
                  (typeof tx.in_msg?.destination === "string" && tx.in_msg.destination.toLowerCase().includes(search)) ||
                  (typeof tx.transaction_id?.hash === "string" && tx.transaction_id.hash.toLowerCase().includes(search))
                    ? "trx-highlight"
                    : ""
                }
              >
                <td>
                  {formatDate(tx.utime)} {formatTime(tx.utime)}
                </td>
                <td>
                  {typeof tx.in_msg?.source === "string"
                    ? tx.in_msg.source
                    : tx.in_msg?.source?.address || "—"}
                </td>
                <td>
                  {typeof tx.in_msg?.destination === "string"
                    ? tx.in_msg.destination
                    : tx.in_msg?.destination?.address || "—"}
                </td>
                <td>
                  {(tx.in_msg?.value || 0) / 1e9} {tx.token || "TON"}
                </td>
                <td>{tx.in_msg ? "Success" : "Unknown"}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="trx-empty">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trx;
