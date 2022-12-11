export const addNewService = async (data) => {
    const res = await fetch('/api/admin/services/service_groups', { method: 'PUT', body: data });
    const jsonRes = await res.json();
    return jsonRes;
}