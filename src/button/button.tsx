import { defineComponent, PropType } from "vue";
export type IColor = 'red' | 'green' | 'blue' | 'yellow'
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: 'blue'
    },
    icon: {
        type: String,
        default: "",
    }
}
export default defineComponent({
    name: "Button",
    props,
    setup(props, { slots }) {
        return () => <button
            class={`
                m-1
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${props.color}-500 
                hover:bg-${props.color}-700 
                border-none 
                cursor-pointer 
                `}
        >
            {props.icon ? <i class={`i-ic-baseline-${props.icon} p-2.4`}></i> : ''}
            {slots.default ? slots.default() : ''}
        </button>
    }
});