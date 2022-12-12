
//ServiceGroup Functions

export const getAllSeriveGroups = async () => {

    const res = await fetch('/api/admin/service_groups', { method: 'GET', headers: { 'content-type': 'application/json' } }).catch(e => { error: 'Technical error' });
    const jsonRes = await res.json();
    return jsonRes;
}

export const addNewServiceGroup = async (data) => {

    const res = await fetch('/api/admin/service_groups', { method: 'POST', body: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).catch(e => { error: 'Technical error' });
    const jsonRes = await res.json();
    return jsonRes;
}
export const getSGDetails = async ({ queryKey }) => {
    const [_key, { sgid }] = queryKey
    const res = await fetch('/api/admin/service_groups/' + sgid, { method: 'GET', headers: { 'content-type': 'application/json' } }).then(data => data.json()).catch(e => { error: 'Technical error' });
    return res
}

export const editServiceGroup = async (data) => {
    const res = await fetch('/api/admin/service_groups/' + data.id, { method: 'POST', body: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).catch(e => { error: 'Technical error' });
    const jsonRes = await res.json();
    return jsonRes;
}