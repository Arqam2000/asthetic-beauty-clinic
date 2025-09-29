// import React from "react";

// export default function TheBook() {
//   const url = "https://lamaesthetic.co.uk/uploads/surahs/"
//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-6">
//       {/* Header */}
//       <header className="border-b pb-4 mb-6 flex justify-between items-center">
//         <h1 className="text-2xl font-semibold">Al Quran</h1>
//         <nav className="space-x-6">
//           <a href="#" className="text-blue-600 hover:underline">Al Haya Al Akhlaq</a>
//           <a href="#" className="text-blue-600 hover:underline">Majmooa Hidayat</a>
//           <a href="#" className="text-blue-600 hover:underline">Tafseer ul Quran</a>
//         </nav>
//         <div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="border rounded px-3 py-1"
//           />
//         </div>
//       </header>

//       {/* About Author */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-2">About the Author</h2>
//         <p className="mb-4">
//           Muhammad Shoaib Bin Hafiz Muslim was a distinguished Muslim scholar and educator,
//           renowned for his contributions to Arabic literature and education in the early 19th Century.
//           He authored three notable books, reflecting his deep understanding of Islamic teachings
//           and Arabic linguistics.
//         </p>
//         <p className="mb-4">
//           <strong>1. Tafseer Quran</strong> &nbsp;&nbsp;
//           <strong>2. Majmooa Hidayat</strong> &nbsp;&nbsp;
//           <strong>3. Al Haya Al Akhlaq</strong>
//         </p>
//         <p>
//           I have tried my level best to put all as it was but since it was written in 1938 so the pages were damaged.
//           May Allah bless his soul and accept his working.
//         </p>
//       </section>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 text-sm">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-3 py-2">Majmooa Hidayat</th>
//               <th className="border px-3 py-2">Tafseer ul Quran</th>
//               <th className="border px-3 py-2">Al Haya Al Akhlaq</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               ["Preface", "2. Surah Al-Baqara (Starting Para-2)", ""],
//               ["Chapter 1", "3. Surah Al-Imran", ""],
//               ["Chapter 2", "4. Surah An-Nisaa", ""],
//               ["", "5. Surah Al-Maeda", ""],
//               ["", "6. Surah Al-Anaam", ""],
//               ["", "7. Surah Al-Araf", ""],
//               ["", "8. Surah Al-Anfal", ""],
//               ["", "9. Surah At-Tawba", ""],
//               ["", "10. Surah Yunus", ""],
//               ["", "11. Surah Hud", ""],
//               ["", "12. Surah Yusuf", ""],
//               ["", "13. Surah Ar-Rad", ""],
//               ["", "14. Surah Ibrahim", ""],
//               ["", "15. Surah Al-Hijr", ""],
//               ["", "16. Surah An-Nahl", ""],
//               ["", "17. Surah Al-Isra", ""],
//               ["", "18. Surah Al-Kahf", ""],
//               ["", "19. Surah Maryam", ""],
//               ["", "20. Surah Taha", ""],
//               ["", "21. Surah Al-Anbiya", ""],
//               ["", "22. Surah Al-Hajj", ""],
//               ["", "23. Surah Al-Muminoon", ""],
//               ["", "24. Surah An-Noor", ""],
//               ["", "25. Surah Al-Furqan", ""],
//               ["", "26. Surah Ash-Shuara", ""],
//               ["", "27. Surah An-Naml", ""],
//               ["", "28. Surah Al-Qasas", ""],
//               ["", "29. Surah Al-Ankaboot", ""],
//               ["", "30. Surah Ar-Room", ""],
//               ["", "31. Surah Luqman", ""],
//               ["", "32. Surah As-Sajda", ""],
//               ["", "33. Surah Al-Ahzab", ""],
//               ["", "34. Surah Saba", ""],
//               ["", "35. Surah Fatir", ""],
//               ["", "36. Surah Ya-Sin", ""],
//               ["", "37. Surah Saaffaat", ""],
//               ["", "38. Surah Saad", ""],
//               ["", "39. Surah Zamar", ""],
//               ["", "46. Surah Ahqaaf", ""],
//               ["", "47. Surah Muhammad", ""],
//               ["", "48. Surah Fatah", ""],
//               ["", "49. Surah Hujraat", ""],
//               ["", "50. Surah Qaaf", ""],
//               ["", "51. Surah Az Zariat", ""],
//               ["", "52. Surah Toor", ""],
//               ["", "53. Surah Najm", ""],
//               ["", "54. Surah Qamar", ""],
//               ["", "55. Surah Rehman", ""],
//               ["", "56. Surah Waqia", ""],
//               ["", "57. Surah Hadeed", ""],
//               ["", "58. Surah Mujadila", ""],
//               ["", "59. Surah Hashr", ""],
//               ["", "60. Surah Mumtahana", ""],
//               ["", "61. Surah Saff", ""],
//               ["", "62. Surah Jum’a", ""],
//               ["", "63. Surah Munafiqeen", ""],
//               ["", "64. Surah Taghabun", ""],
//               ["", "65. Surah Talaq", ""],
//               ["", "66. Surah Tehreem", ""],
//               ["", "67. Surah Mulk", ""],
//               ["", "68. Surah Qalam", ""],
//               ["", "69. Surah Haaqqa", ""],
//               ["", "70. Surah Ma’arij", ""],
//               ["", "71. Surah Nooh", ""],
//               ["", "72. Surah Jinn", ""],
//               ["", "73. Surah Muzzammil", ""],
//               ["", "74. Surah Muddassir", ""],
//               ["", "75. Surah Qiyamah", ""],
//               ["", "76. Surah Al Insaan", ""],
//               ["", "77. Surah Mursalaat", ""]
//             ].map((row, idx) => (
//               <tr key={idx}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border px-3 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





import React from "react";
import quran from "../assets/holy-quran.webp"

export default function TheBook() {
  // helper to generate PDF link from name
  const getPdfLink = (name) => {
    if (!name) return null;
    // extract last word (like Ahqaaf, Baqara, etc.)
    const words = name.split(" ");
    const lastWord = words[words.length - 1]
      // .replace(/[^a-zA-Z]/g, "") // remove special chars
      .toLowerCase();
    return `https://lamaesthetic.co.uk/uploads/surahs/${lastWord.toLowerCase().replaceAll("-", "")}.pdf`;
  };

  const tableData = [
    ["Preface", "2. Surah Al-Baqara (Starting Para-2)", ""],
    ["Chapter 1", "3. Surah Al-Imran", ""],
    ["Chapter 2", "4. Surah An-Nisaa", ""],
    ["", "5. Surah Al-Maeda", ""],
    ["", "6. Surah Al-Anaam", ""],
    ["", "7. Surah Al-Araf", ""],
    ["", "8. Surah Al-Anfal", ""],
    ["", "9. Surah At-Tawba", ""],
    ["", "10. Surah Yunus", ""],
    ["", "11. Surah Hud", ""],
    ["", "12. Surah Yousuf", ""],
    ["", "13. Surah Ar-Rad", ""],
    ["", "14. Surah Ibrahim", ""],
    ["", "15. Surah Al-Hijr", ""],
    ["", "16. Surah An-Nahl", ""],
    ["", "17. Surah Al-Isra", ""],
    ["", "18. Surah Al-Kahf", ""],
    ["", "19. Surah Maryam", ""],
    ["", "20. Surah Taha", ""],
    ["", "21. Surah Al-Anbiya", ""],
    ["", "22. Surah Al-Hajj", ""],
    ["", "23. Surah Al-Muminoon", ""],
    ["", "24. Surah An-Noor", ""],
    ["", "25. Surah Al-Furqan", ""],
    ["", "26. Surah Ash-Shuara", ""],
    ["", "27. Surah An-Naml", ""],
    ["", "28. Surah Al-Qasas", ""],
    ["", "29. Surah Al-Ankaboot", ""],
    ["", "30. Surah Ar-Room", ""],
    ["", "31. Surah Luqman", ""],
    ["", "32. Surah As-Sajda", ""],
    ["", "33. Surah Al-Ahzab", ""],
    ["", "34. Surah Saba", ""],
    ["", "35. Surah Fatir", ""],
    ["", "36. Surah Ya-Sin", ""],
    ["", "37. Surah Saaffaat", ""],
    ["", "38. Surah Saad", ""],
    ["", "39. Surah Zamar", ""],
    ["", "46. Surah Ahqaaf", ""],
    ["", "47. Surah Muhammad", ""],
    ["", "48. Surah Fatah", ""],
    ["", "49. Surah Hujraat", ""],
    ["", "50. Surah Qaaf", ""],
    ["", "51. Surah Az Zariat", ""],
    ["", "52. Surah Toor", ""],
    ["", "53. Surah Najm", ""],
    ["", "54. Surah Qamar", ""],
    ["", "55. Surah Rehman", ""],
    ["", "56. Surah Waqia", ""],
    ["", "57. Surah Hadeed", ""],
    ["", "58. Surah Mujadila", ""],
    ["", "59. Surah Hashr", ""],
    ["", "60. Surah Mumtahana", ""],
    ["", "61. Surah Saff", ""],
    ["", "62. Surah Jum’a", ""],
    ["", "63. Surah Munafiqeen", ""],
    ["", "64. Surah Taghabun", ""],
    ["", "65. Surah Talaq", ""],
    ["", "66. Surah Tehreem", ""],
    ["", "67. Surah Mulk", ""],
    ["", "68. Surah Qalam", ""],
    ["", "69. Surah Haaqqa", ""],
    ["", "70. Surah Ma’arij", ""],
    ["", "71. Surah Nooh", ""],
    ["", "72. Surah Jinn", ""],
    ["", "73. Surah Muzzammil", ""],
    ["", "74. Surah Muddassir", ""],
    ["", "75. Surah Qiyamah", ""],
    ["", "76. Surah Al Insaan", ""],
    ["", "77. Surah Mursalaat", ""],
  ];

  return (
    <div className="overflow-x-auto">
      <header className="border-b pb-4 mb-6 flex justify-between items-center pt-4 px-10">

        <div className="flex items-center gap-2">
          <img src={quran} alt="quran" width={100} />
          <h1 className="text-2xl font-semibold">Al Quran</h1>
        </div>
        <nav className="space-x-6 hidden md:inline">
          <a href="#" className="text-blue-600 hover:underline">Al Haya Al Akhlaq</a>
          <a href="#" className="text-blue-600 hover:underline">Majmooa Hidayat</a>
          <a href="#" className="text-blue-600 hover:underline">Tafseer ul Quran</a>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 hidden md:inline"
          />
        </div>
      </header>

      <section className="mb-8">
         <h2 className="text-xl font-bold mb-2">About the Author</h2>
         <p className="mb-4 text-justify">
           Muhammad Shoaib Bin Hafiz Muslim was a distinguished Muslim scholar and educator,
           renowned for his contributions to Arabic literature and education in the early 19th Century.
           He authored three notable books, reflecting his deep understanding of Islamic teachings
           and Arabic linguistics.
         </p>
         <p className="mb-4 text-justify">
           <strong>1. Tafseer Quran</strong><br />
           <strong>2. Majmooa Hidayat</strong><br />
           <strong>3. Al Haya Al Akhlaq</strong><br />
         </p>
         <p>
           I have tried my level best to put all as it was but since it was written in 1938 so the pages were damaged.
           May Allah bless his soul and accept his working.
         </p>
       </section>

      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">Majmooa Hidayat</th>
            <th className="border px-3 py-2">Tafseer ul Quran</th>
            <th className="border px-3 py-2">Al Haya Al Akhlaq</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) => {
                const pdf = getPdfLink(cell);
                return (
                  <td key={i} className="border px-3 py-2">
                    {pdf ? (
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {cell}
                      </a>
                    ) : (
                      cell
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

