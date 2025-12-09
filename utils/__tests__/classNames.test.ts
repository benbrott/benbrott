import classNames from '@/utils/classNames';

describe('classNames util function', () => {
  test('removes false values', () => {
    expect(classNames(['class1', false, 'class2'])).toBe('class1 class2');
  });
});
