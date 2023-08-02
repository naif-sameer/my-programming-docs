# component design patterns

-   These are guidelines . not rules.
-   Your opinion and experience matters too.
-   Choose what works best for you and your team.

## props

**fundamentals**

```js
defineProps({
    length: {
        type: Number, // String, Boolean, Array, Object, Date, Function, Symbol
        // or
        type: [Number, String], // multiple types

        required: true,

        default: 90,
    },
});
```

**validation**

```js
defineProps({
    image: {
        type: String,
        required: true,

        validator: (propValue) => {
            const hasImagesDirectory = propsValue.indexOf('/images/') > -1;
            const isPNG = propValue.endsWith('.png');
            const isJPEG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg');
            const hasValidExtension = isPNG || isJPEG;

            return hasImagesDirectory && hasValidExtension;
        },
    },
});
```
