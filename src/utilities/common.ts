export const sortPolicy = (data) => {
    const updatedData = data.sort((a, b) => {
        return new Date(a.policyStart).getTime() - new Date(b.policyStart).getTime();
      });

    return updatedData;
}

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
}