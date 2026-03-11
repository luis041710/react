// Creación de componente input

export default function Input({label, type = "text", ...props}){
    return (
        <div className="w-[320px]">
            {/* Label */}
            {label && (
                <label 
                className="
                block
                text-[8px]
                mb-1
                text-text-primary
                "
                >
                {label}
                </label>
            )}

            {/* Contenedor del Input */}
            <div
                className="
                relative
                h-12
                flex
                items-center
                "
            >
                {/* Área interactiva invisible (48px)*/}
            <div
                className="
                    absolute
                    inset-0
                    "
                onMouseDown = {(e) => {
                    e.preventDefault();
                    e.currentTarget.nextSibling.focus();
                    }}
                
            />
            {/* Input Visual */}
             <input 
                type={type}
                className="
                relative
                w-full
                h-12
                rounded-b-md
                border
                border-border-strong
                px-4
                text-h2
                
                gocus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                "
                {...props}
            
             />

            </div>

            </div>
    );
}
