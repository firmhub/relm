
#### Action creators

If you take a look above, in our `childDispatch` function we call another function named `$CHILD_ACTION`. This function is an example of an action creator in relm.

Action creators are simply functions that return an action object. They are useful in certain scenarios and are used in `redux` and `flux`. They are not always necessary in relm as majority of the time actions are dispatched/handled/etc. in just a single file but they have some uses. For now, just have a look at what `$CHILD_ACTION` is doing:

```javascript
function $CHILD_ACTION (counterIndex, counterAction) {
  return {
    type: CHILD_ACTION,
    index: counterIndex,
    payload: counterAction,
  };
}
```
It is simply taking some arguments and then returning an object with the type set correctly and the arguments serialized in a specific way. Notice the `payload` property we used in `updatedNestedCounter` is being created here.

Additionally, I like to follow a convention of always naming my action creators with a `$` sign followed by the variable I am using for my action type (which I always keep uppercase). This is entirely convention, but it means I have to come up with fewer names and I see exactly what is going on when I see a function named that way.
