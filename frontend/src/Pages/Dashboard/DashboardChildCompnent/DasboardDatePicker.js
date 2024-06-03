import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DasboardDatePicker = ({ adminAppoDate, setAdminAppoDate }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Booking Date"
            value={dayjs(adminAppoDate)}
            onChange={(newValue) => setAdminAppoDate(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default DasboardDatePicker;
