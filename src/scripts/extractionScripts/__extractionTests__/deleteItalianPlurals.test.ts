import { deleteItalianPlurals } from '../Italian/deleteItalianPlurals'

describe('check deleteItalianPlurals function', () => {
    test('Plurals are changed into singulars', () => {
        const onlySingulars = ['macchina', 'macchina', 'informazione', 'fratello', 'fratello', 'informazione', 'fratello'];
        expect(deleteItalianPlurals(['macchina', 'macchine', 'informazione', 'fratelli', 'fratello', 'informazioni', 'fratelli'])).toEqual(onlySingulars);
    });
    test('Plurals are changed into singulars with exceptions', () => {
        const onlySingulars = ['arancia', 'principio', 'arancia', 'laccio', 'principio', 'lago', 'laccio', 'lago', 'camicia', 'camicia'];
        expect(deleteItalianPlurals(['arance', "principio", 'arancia', 'laccio', 'principi', 'lago', 'lacci', 'laghi', 'camicia', 'camicie'])).toEqual(onlySingulars);
    });
    test('Plurals are changed into singulars - adjectives', () => {
        const onlySingulars = ['bello', 'importante', 'bella', 'importante', 'rossa', 'bella', 'rossa', 'bello'];
        expect(deleteItalianPlurals(['belli', 'importanti', 'bella', 'importante', 'rossa', 'belle', 'rosse', 'bello'])).toEqual(onlySingulars);
    });
}) 