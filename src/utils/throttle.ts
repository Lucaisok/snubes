export const throttle = (cb: Function, limit: number) => {
    let wait = false;
    return () => {
        if (!wait) {
            cb();
            wait = true;
            setTimeout(() => {
                wait = false;
            }, limit);
        }
    };
};
