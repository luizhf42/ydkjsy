const dayStart = "07:30";
const dayEnd = "17:45";

const splitTime = (time) => {
	const splittedTime = time.split(":");
	const [hours, minutes] = splittedTime;
	return [Number(hours), Number(minutes)];
};

const checkIfIsBeforeDayStart = (startTimeHours, startTimeMinutes) => {
	const [dayStartHours, dayStartMinutes] = splitTime(dayStart);
	return (
		startTimeHours < dayStartHours ||
		(startTimeHours === dayStartHours && startTimeMinutes < dayStartMinutes)
	);
};

const checkIfIsAfterDayEnd = (endTimeHours, endTimeMinutes) => {
	const [dayEndHours, dayEndMinutes] = splitTime(dayEnd);
	return (
		endTimeHours > dayEndHours ||
		(endTimeHours === dayEndHours && endTimeMinutes > dayEndMinutes)
	);
};

const scheduleMeeting = (startTime, durationMinutes) => {
	const [startTimeHours, startTimeMinutes] = splitTime(startTime);

	if (checkIfIsBeforeDayStart(startTimeHours, startTimeMinutes, dayStart)) return false;

	const endTimeHours = startTimeHours + Math.floor(durationMinutes / 60);
	const endTimeMinutes = startTimeMinutes + durationMinutes % 60;

	if (checkIfIsAfterDayEnd(endTimeHours, endTimeMinutes)) return false;

	return true;
};

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
