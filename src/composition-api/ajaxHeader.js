import jsSHA from 'jssha';
export function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
    let AppID = 'fcb1331f951a48edb6ce7d80e2b7a001';
    let AppKey = 'gwqVwmt8XiZ71aOMWU9JXoB16Os';
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization =
        'hmac username="' +
        AppID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"';
    return { Authorization: Authorization, 'X-Date': GMTString };
}
