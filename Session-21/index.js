var path = require("path");

// console.log(__filename);
// console.log(__dirname);

// console.log(
//   path.basename(
//     "E:\\01_TRAINING\\05_AshokIT\\Main_Batches\\05_Morning_8AM\\AIT_NodeB28AM\\Session-21\\index.js"
//   )
// );

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(
//   path.extname(
//     "E:\\01_TRAINING\\05_AshokIT\\Main_Batches\\05_Morning_8AM\\AIT_NodeB28AM\\Session-21\\Home.html"
//   )
// );

// console.log(path.parse(__filename));

// console.log(path.join("/search", "/JS", "HTML"));

// console.log(path.join(__dirname, "Profile.html"));
// console.log(path.join(__dirname, "Profile", "Profile.html", "..", ".."));
// console.log(
//   path.normalize(
//     "E:\\\\\\01_TRAINING\\\\\\\\05_AshokIT\\Main_Batches\\\\\\05_Morning_8AM\\\\\\AIT_NodeB28AM\\\\\\Session-21\\\\index.js"
//   )
// );

console.log(
  path.isAbsolute(
    "E:\\01_TRAINING\\05_AshokIT\\Main_Batches\\05_Morning_8AM\\AIT_NodeB28AM\\Session-21\\index.js"
  )
);

console.log(path.isAbsolute("../../../Home.html"));
