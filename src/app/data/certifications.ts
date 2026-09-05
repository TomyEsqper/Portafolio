export interface Certification {
  id: string;
  title: string;
  issued: string;
  credentialId: string;
  image: string;
  skills: string[];
}

export interface CertificationIssuer {
  id: string;
  org: string;
  certs: Certification[];
}

/** Ruta en public/certificates/{id}.webp — reemplaza con tu captura/PDF exportado */
export function certImage(id: string): string {
  const pngIds = new Set([
    'cf-datos',
    'cf-english',
    'sena-prototipos',
    'sena-circuitos',
    'sena-investigacion-app',
    'sena-investigacion-base',
    'sena-modding',
    'sena-simulacion',
    'sena-robots',
    'sena-firmware',
    'uci-decisions',
    'ibm-genai',
  ]);

  if (pngIds.has(id)) {
    return `/certificates/${id}.png`;
  }

  return `/certificates/${id}.webp`;
}

export interface CertificationWithIssuer extends Certification {
  issuerId: string;
  issuerOrg: string;
  wallRotate: number;
  wallYOffset: number;
}

export function flattenCertifications(
  issuers: CertificationIssuer[]
): CertificationWithIssuer[] {
  return issuers.flatMap((issuer, issuerIndex) =>
    issuer.certs.map((cert, certIndex) => {
      const seed = issuerIndex * 7 + certIndex * 3;
      return {
        ...cert,
        issuerId: issuer.id,
        issuerOrg: issuer.org,
        wallRotate: ((seed % 5) - 2) * 2.8,
        wallYOffset: ((seed % 4) - 1.5) * 8,
      };
    })
  );
}
