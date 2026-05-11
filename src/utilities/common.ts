export const sortPolicy = (data) => {
    const updatedData = data.sort((a, b) => {
        return new Date(a.policyStart).getTime() - new Date(b.policyStart).getTime();
      });

    return updatedData;
}