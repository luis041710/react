export default function Select({
    label,
    name,
    value,
    error,
    onChange,
    options = [],
    }
){
    return(
        <div className="w-[320px]">

            {/* Si label tiene contenido es igual a thurthy Si no es falsy y no muestra el label */}
            { label && (

            <label className="
            text-[8px]
            mb-1
            text-text-primary
            "
            >
                {label}
            </label>

            )}

            <select
            value={value}
            onChange={onChange}
            name={name}
            className="
                w-full
                h-12
                rounded-md
                border
                border-border
                px-4         
            "
            >
            <option value="">Seleccione un tipo de documento</option>
            {options.map((option) => {
                return(
                <option key= {option.value} value= {option.value}>
                    {option.label}
                </option>
                )        
            })
        };
            
            </select>
            {error && <p className="text-info-medium text-red-600 mt-1">{error}</p>}
        </div>
    );
};