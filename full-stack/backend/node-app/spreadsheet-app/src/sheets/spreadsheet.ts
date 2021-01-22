import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "@plant-rest-api/sheets/client_secret.json";
import get from "lodash/get";

const doc = new GoogleSpreadsheet(
  "1tfYgbpUbIrEwkveYDqRW8PaZc0N1a3MSTUhDMppEzEQ"
);

interface accessSpreadSheetInterface {
  offset?: number;
  limit?: number;
  query?: {
    student_name?: string;
    gender?: string;
    home_state?: string;
    major?: string;
  };
  order_by?: string;
}

export const accessSpreadSheet = async () => {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });
  await doc.loadInfo();
  return doc;
};

export const findAll = async ({
  offset = 1,
  limit = 20,
  query,
  order_by,
}: accessSpreadSheetInterface) => {
  console.log(query);
  console.log(order_by);

  const doc = await accessSpreadSheet();
  const sheet = doc.sheetsByIndex[0];

  const rawData = await sheet.getRows({
    offset,
    limit,
  });

  const data = rawData.map((item) => {
    return {
      id: get(item, "ID", ""),
      studentName: get(item, "Student Name", ""),
      gender: get(item, "Gender", ""),
      classLevel: get(item, "Class Level", ""),
      homeState: get(item, "Home State", ""),
      major: get(item, "Major", ""),
      extracurricularActivity: get(item, "Extracurricular Activity", ""),
    };
  });

  return {
    docTitle: doc.title,
    sheetTitle: sheet.title,
    sheetRowCount: sheet.rowCount,
    data,
  };
};

export const create = async ({ payload }: any) => {
  try {
    const doc = await accessSpreadSheet();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(payload);
    return true;
  } catch (error) {
    return false;
  }
};
