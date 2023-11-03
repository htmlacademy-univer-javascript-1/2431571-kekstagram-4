const convertToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((element) => parseInt(element,10));
  return hours * 60 + minutes;
};

const checkTime = (start, end, meeting, meetingDuration) => {
  const startTime = convertToMinutes(start);
  const endTime = convertToMinutes(end);
  const meetingTime = convertToMinutes(meeting);

  if (meetingTime >= startTime) {
    return (meetingTime + meetingDuration) <= endTime;
  }

  return false;
};

checkTime('08:00', '17:30', '14:00', 90); // true
checkTime('8:0', '10:0', '8:0', 120);     // true
checkTime('08:00', '14:30', '14:00', 90); // false
checkTime('14:00', '17:30', '08:0', 90);  // false
checkTime('8:00', '17:30', '08:00', 900); // false
