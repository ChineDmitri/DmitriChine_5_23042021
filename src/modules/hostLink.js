// ATTANTION si vous allez heberger voitre site il faut mettre "" dans les port
export const portFronEnd = ':8080'; // 
export const portServer = ':3000';
// ATTENTION

export const domaine = ("http://" + document.domain);
export const link = (domaine + portServer + '/api/cameras');
export const linkPOST = (domaine + portServer + '/api/cameras/order');