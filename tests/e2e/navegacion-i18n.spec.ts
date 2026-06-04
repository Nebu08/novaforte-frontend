import { test, expect } from '@playwright/test';

test.describe('Pruebas E2E de Navegación, Internacionalización (i18n) y Academy', () => {

  test('Validar traducción y currículo en español', async ({ page }) => {
    // 1. Navegar a Academy en español
    await page.goto('/es/academy');
    
    // 2. Verificar títulos y subtítulos del Hero y niveles
    await expect(page.locator('h1')).toContainText('Forme a los Creadores del Mañana');
    await expect(page.locator('h2 >> nth=0')).toContainText('Estructura Curricular: 4 Niveles de Crecimiento');
    
    // 3. Verificar descripción detallada del Nivel 2
    const level2Desc = page.locator('text=Transición del modelado intuitivo al diseño técnico. El estudiante aprende a utilizar restricciones matemáticas').first();
    await expect(level2Desc).toBeVisible();

    // 4. Verificar la tabla de resumen de currículo
    await expect(page.locator('h3 >> text=Resumen del Plan de Estudios por Niveles')).toBeVisible();
    
    const tableHeaderNivel = page.locator('th >> text=Nivel');
    const tableHeaderSoftware = page.locator('th >> text=Software Clave');
    await expect(tableHeaderNivel).toBeVisible();
    await expect(tableHeaderSoftware).toBeVisible();

    // 5. Verificar contenido de la tabla resumen (Nivel 2)
    const row2 = page.locator('tr:has-text("Nivel 2: Diseño Paramétrico")');
    await expect(row2.locator('td >> nth=1')).toContainText('Mecánica Funcional');
    await expect(row2.locator('td >> nth=2')).toContainText('Onshape o Fusion 360');
  });

  test('Validar traducción y currículo en inglés', async ({ page }) => {
    // 1. Navegar a Academy en inglés
    await page.goto('/en/academy');
    
    // 2. Verificar Hero y niveles traducidos al inglés
    await expect(page.locator('h1')).toContainText('Train the Creators of Tomorrow');
    await expect(page.locator('h2 >> nth=0')).toContainText('Curriculum Structure: 4 Growth Levels');
    
    // 3. Verificar descripción detallada del Nivel 2
    const level2DescEn = page.locator('text=Transition from intuitive modeling to technical design. The student learns to use mathematical constraints').first();
    await expect(level2DescEn).toBeVisible();

    // 4. Verificar tabla traducida
    await expect(page.locator('h3 >> text=Curriculum Summary by Levels')).toBeVisible();
    
    const tableHeaderLevelEn = page.locator('th >> text=Level');
    const tableHeaderSoftwareEn = page.locator('th >> text=Key Software');
    await expect(tableHeaderLevelEn).toBeVisible();
    await expect(tableHeaderSoftwareEn).toBeVisible();

    // 5. Verificar contenido traducido de la tabla (Nivel 2)
    const row2En = page.locator('tr:has-text("Level 2: Parametric Design")');
    await expect(row2En.locator('td >> nth=1')).toContainText('Functional Mechanics');
    await expect(row2En.locator('td >> nth=2')).toContainText('Onshape or Fusion 360');
  });

  test('Camila: Home -> Humans -> Modal download -> Gracias (SC-01)', async ({ page }) => {
    // 1. Navegar a la página de inicio en español
    await page.goto('/es');
    
    // 2. Hacer clic en "Explorar Humans" (la división activa por defecto)
    await page.click('text=Explorar Humans');
    await page.waitForURL('**/humans');
    await expect(page).toHaveURL(/.*\/humans/);
    await expect(page.locator('h1')).toContainText('Dispositivos Ortopédicos');
    
    // 3. Abrir el modal de descarga
    await page.click('text=Descargar Portafolio PDF');
    await expect(page.locator('text=Descargar Portafolio Técnico')).toBeVisible();
    
    // 4. Completar el formulario con datos válidos
    await page.fill('input[placeholder*="Camila Restrepo"]', 'Dra. Camila Restrepo');
    await page.fill('input[placeholder*="clinica.com"]', 'camila.restrepo@clinica.com');
    await page.fill('input[placeholder*="IPS"]', 'Centro de Rehabilitación');
    await page.fill('input[placeholder*="Biomédica"]', 'Fisiatra');
    await page.fill('input[placeholder*="300 123 4567"]', '3001234567');
    
    // 5. Enviar formulario y validar redirección
    await page.click('form button[type="submit"]');
    await page.waitForURL('**/gracias');
    await expect(page).toHaveURL(/.*\/gracias/);
    await expect(page.locator('h1')).toContainText('Muchas Gracias');
  });

  test('Mateo: Home -> Animals (Vet) -> Cotizar (SC-04)', async ({ page }) => {
    // 1. Navegar a la página de inicio en español
    await page.goto('/es');
    
    // 2. Hacer clic en la pestaña "Animals" de divisiones
    await page.click('button:has-text("Animals")');
    
    // 3. Hacer clic en el botón "Explorar Animals"
    await page.click('text=Explorar Animals');
    await page.waitForURL('**/vet');
    await expect(page).toHaveURL(/.*\/vet/);
    await expect(page.locator('h1')).toContainText('Órtesis y Prótesis 3D');
    
    // 4. Hacer clic en "Cotizar Dispositivo Veterinario"
    await page.click('text=Cotizar Dispositivo Veterinario');
    await page.waitForURL('**/vet/cotizar');
    await expect(page).toHaveURL(/.*\/vet\/cotizar/);
  });

});
