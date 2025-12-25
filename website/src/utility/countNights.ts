/* eslint-disable */
export function countNights(checkIn: any, checkOut: any) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Convert input to Date objects
  checkIn = new Date(checkIn);
  checkOut = new Date(checkOut);

  if (checkOut <= checkIn) return 0;

  // First "night end" = next day's 12 PM from check-in
  const firstNightEnd: any = new Date(checkIn);
  firstNightEnd.setHours(12, 0, 0, 0); // set to 12:00 PM same day

  // If user checked in after 12 PM, move end to *next day* 12 PM
  if (checkIn.getHours() >= 12) {
    firstNightEnd.setDate(firstNightEnd.getDate() + 1);
  }

  // Nights count starts at 1 (first night)
  let nights = 1;

  // Remaining time after first night
  let remainingMs = checkOut - firstNightEnd;

  if (remainingMs <= 0) return nights;

  // Add full days
  nights += Math.floor(remainingMs / MS_PER_DAY);

  // Check partial leftover → if past 12 PM, count 1 more night
  const leftoverMs = remainingMs % MS_PER_DAY;
  if (leftoverMs > 0) nights++;

  return nights;
}
