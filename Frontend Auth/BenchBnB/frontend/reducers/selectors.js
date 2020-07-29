export const selectBench = ({ benches }, benchId) => {
    return benches[benchId] || { reviewIds: [] };
};

export const asArray = ({ benches }) => {
    Object.keys(benches).map(key => benches[key])
};