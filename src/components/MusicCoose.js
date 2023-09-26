const ExcelJS = require('exceljs');


async function readCSVFile(file) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.csv.readFile(file);
    console.log("worksheet is: ", worksheet);
    return worksheet
  }

export default async function ChooseSongs(mood){
    console.log("Reading file", "data/data_moods.csv");
    const worksheet = await readCSVFile('data/data_moods.csv');
    console.log("worksheet is: ", worksheet);





}