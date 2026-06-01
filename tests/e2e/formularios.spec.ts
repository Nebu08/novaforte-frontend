import { test, expect } from '@playwright/test';

test.describe('Pruebas E2E de Formularios de Cotización y Contacto', () => {
  
  test('Formulario Humans: validaciones y envío exitoso', async ({ page }) => {
    // 1. Navegar al cotizador de Humans en español
    await page.goto('/es/humans/cotizar');
    
    // 2. Intentar enviar vacío y validar mensajes de error
    await page.click('button[type="submit"]');
    await expect(page.locator('text=obligatorio')).toBeVisible();
    await expect(page.locator('text=válido')).toBeVisible();
    
    // 3. Completar campos con valores válidos
    await page.fill('input[type="text"] >> nth=0', 'Dr. Carlos Mendoza');
    await page.fill('input[type="email"]', 'carlos.mendoza@clinica.com');
    await page.fill('input[type="text"] >> nth=1', 'Clínica de Fracturas Bogotá');
    await page.selectOption('select', 'orthosis');
    await page.fill('textarea', 'Paciente con requerimiento de protector facial post-fractura nasal, con tolerancia estricta de ±0.1mm.');
    
    // 4. Enviar formulario y verificar redirección a la página de Gracias
    await page.click('button[type="submit"]');
    await page.waitForURL('**/gracias');
    await expect(page).toHaveURL(/.*\/gracias/);
    await expect(page.locator('h1')).toContainText('Muchas Gracias');
  });

  test('Formulario Vet: validaciones y envío exitoso', async ({ page }) => {
    // 1. Navegar al cotizador de Vet en español
    await page.goto('/es/vet/cotizar');
    
    // 2. Intentar enviar vacío
    await page.click('button[type="submit"]');
    await expect(page.locator('text=obligatorio')).toBeVisible();
    
    // 3. Completar datos
    await page.fill('input[type="text"] >> nth=0', 'Mateo Restrepo');
    await page.fill('input[type="email"]', 'mateo.vet@clinica.com');
    await page.fill('input[type="text"] >> nth=1', 'Perro / Golden Retriever');
    await page.selectOption('select', 'wheelchair');
    await page.fill('textarea', 'Silla de ruedas para extremidades posteriores de mascota de 25kg con displasia severa.');
    
    // 4. Enviar
    await page.click('button[type="submit"]');
    await page.waitForURL('**/gracias');
    await expect(page).toHaveURL(/.*\/gracias/);
  });

  test('Formulario Contacto: validaciones y envío exitoso', async ({ page }) => {
    // 1. Navegar a la página de contacto general
    await page.goto('/es/contacto');
    
    // 2. Intentar enviar vacío
    await page.click('button[type="submit"]');
    await expect(page.locator('text=obligatorio')).toBeVisible();
    
    // 3. Completar datos
    await page.fill('input[placeholder*="Camila"]', 'Alejandro Valencia');
    await page.fill('input[type="email"]', 'alejandro@colegio.edu.co');
    await page.fill('input[type="tel"]', '3101234567');
    await page.selectOption('select', 'support');
    await page.fill('textarea', 'Solicitud de información técnica sobre la implementación de laboratorios de impresión 3D en colegios de Bogotá.');
    
    // 4. Enviar
    await page.click('button[type="submit"]');
    await page.waitForURL('**/gracias');
    await expect(page).toHaveURL(/.*\/gracias/);
  });

  test('Formulario Biomedica: validaciones y envío exitoso', async ({ page }) => {
    // 1. Navegar al cotizador de Biomedica en español
    await page.goto('/es/biomedica/cotizar');
    
    // 2. Intentar enviar vacío
    await page.click('button[type="submit"]');
    await expect(page.locator('text=obligatorio').first()).toBeVisible();
    
    // 3. Completar datos
    await page.fill('input[type="text"] >> nth=0', 'Ing. Andrés Valencia');
    await page.fill('input[type="email"]', 'andres.valencia@clinica.com');
    await page.fill('input[type="text"] >> nth=1', 'Hospital General de Medellín');
    await page.fill('input[type="text"] >> nth=2', 'GE Healthcare Optima CT660');
    await page.fill('textarea', 'Solicitud de cotización para la fabricación a medida de un engranaje de rotor de bomba descontinuado.');
    
    // 4. Enviar
    await page.click('button[type="submit"]');
    await page.waitForURL('**/gracias');
    await expect(page).toHaveURL(/.*\/gracias/);
  });

  test('Formulario Registro Academy: validaciones y envío exitoso', async ({ page }) => {
    // 1. Navegar al registro de Academy en español
    await page.goto('/es/academy/contacto');
    
    // 2. Intentar enviar vacío
    await page.click('button[type="submit"]');
    await expect(page.locator('text=obligatorio')).toBeVisible();
    
    // 3. Completar datos
    await page.fill('input[type="text"] >> nth=0', 'Alejandro Gómez');
    await page.fill('input[type="email"]', 'alejandro.gomez@colegio.edu.co');
    await page.fill('input[type="text"] >> nth=1', 'Colegio Mayor de Antioquia');
    await page.selectOption('select >> nth=0', 'coordinator');
    await page.selectOption('select >> nth=1', 'mid');
    
    // 4. Enviar
    await page.click('button[type="submit"]');
    await page.waitForURL('**/gracias');
    await expect(page).toHaveURL(/.*\/gracias/);
  });

});
