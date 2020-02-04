export const HANDLE_DATE_PICK = "HANDLE_DATE_PICK";
export const HANDLE_ROOM_NUM = "ROOM_NUM";

export const handleDatePicker = event => ({
   type: HANDLE_DATE_PICK,
   event 
});

export const handleRoomNum = (roomType, num) => ({
    type: HANDLE_ROOM_NUM,
    roomType,
    num
});