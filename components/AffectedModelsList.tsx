import {
  ManufacturersInfo,
  type Manufacturer,
} from "../lib/data/affected-cars";

interface AffectedModelsListProps {
  className?: string;
}

export default function AffectedModelsList({
  className = "",
}: AffectedModelsListProps) {
  // Filter out manufacturers with no affected models
  const manufacturersWithAffectedModels = Object.entries(ManufacturersInfo)
    .filter(([_, info]) => info.affected && info.affected.length > 0)
    .sort(([_, a], [__, b]) => a.name.localeCompare(b.name));

  return (
    <div className={`space-y-6 ${className}`}>
      {manufacturersWithAffectedModels.map(([manufacturer, info]) => (
        <div key={manufacturer} className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{info.name}</h3>
          <ul className="ml-6 space-y-1 list-disc">
            {info.affected?.map((model, index) => (
              <li key={`${manufacturer}-${index}`} className="text-gray-700">
                <span className="font-medium">{model.model}</span>
                <span className="text-gray-500 ml-2">
                  ({model.yearFrom}
                  {model.yearTo !== model.yearFrom ? ` - ${model.yearTo}` : ""})
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
