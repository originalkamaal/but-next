export const addNewServiceGroup = async (data) => {

    const res = await fetch('/api/admin/services/service_groups', { method: 'POST', body: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
    const jsonRes = await res.json();
    return jsonRes;
}

export const getAllSeriveGroups = async () => {

    const res = await fetch('/api/admin/services/service_groups', { method: 'GET', headers: { 'content-type': 'application/json' } });
    const jsonRes = await res.json();
    return jsonRes;
}