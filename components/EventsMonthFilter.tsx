'use client';

interface AvailableMonth {
  year: number;
  month: number;
  label: string;
}

interface EventsMonthFilterProps {
  availableMonths: AvailableMonth[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  dict:any;
}

export default function EventsMonthFilter({ 
  availableMonths, 
  selectedMonth, 
  onMonthChange,
  dict
}: EventsMonthFilterProps) {
  
  return (
    <form>
      <div className="row mb-4">
        <div className="form-group col-12 d-flex justify-content-end">
          <select 
            className="form-select px-5 w-auto form-control"
            value={selectedMonth}
            onChange={(e) => onMonthChange(e.target.value)}
          >
            <option value="all">{dict.pages.events.all_months}</option>
            {availableMonths.map((monthData) => (
              <option 
                key={`${monthData.year}-${monthData.month}`}
                value={`${monthData.year}-${monthData.month}`}
              >
                {monthData.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}