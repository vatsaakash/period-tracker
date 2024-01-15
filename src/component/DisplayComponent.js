import React from "react";

const DisplayComponent = ({ formData }) => {
  const { avgCycleLength, cycleDuration, cycleStartDate, name } = formData;

  function getNextThreePeriods(cycleStartDate, cycleDuration, avgCycleLength) {
    const periods = [];
    const millisecondsInDay = 24 * 60 * 60 * 1000;

    // Convert cycleStartDate to Date object
    const startDate = new Date(cycleStartDate);

    // Calculate next 3 periods
    for (let i = 0; i < 3; i++) {
      // Calculate period start date
      const periodStart = new Date(
        startDate.getTime() + avgCycleLength * i * millisecondsInDay
      );

      // Calculate period end date
      const periodEnd = new Date(
        periodStart.getTime() + (cycleDuration - 1) * millisecondsInDay
      );

      // Format dates
      const formattedStartDate = periodStart.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const formattedEndDate = periodEnd.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      // Push period range to periods array
      periods.push(`${formattedStartDate} – ${formattedEndDate}`);
    }

    return periods;
  }

  let per = getNextThreePeriods(cycleStartDate, cycleDuration, avgCycleLength);

  return (
    <div className="saved-data">
      <h2>Hi {name}</h2>
      <thread>
      <tr>
        <th>1st </th>
        <th>2nd </th>
        <th>3rd </th>
      </tr>
      <tr>
        {per.map((item) => (
          <td>{item}</td>
        ))}
      </tr>
      </thread>
    </div>
  );
};

export default DisplayComponent;
