import { describe, it, expect } from 'vitest';
import { DEFAULT_PRIORITIES } from '../priorities';

describe('priorities', () => {
  describe('DEFAULT_PRIORITIES', () => {
    it('should have correct number of default priorities', () => {
      expect(DEFAULT_PRIORITIES).toHaveLength(4);
    });

    it('should have all required properties for each priority', () => {
      DEFAULT_PRIORITIES.forEach(priority => {
        expect(priority).toHaveProperty('id');
        expect(priority).toHaveProperty('label');
        expect(priority).toHaveProperty('color');
        expect(priority).toHaveProperty('order');
        
        expect(typeof priority.id).toBe('string');
        expect(typeof priority.label).toBe('string');
        expect(typeof priority.color).toBe('string');
        expect(typeof priority.order).toBe('number');
      });
    });

    it('should have unique ids', () => {
      const ids = DEFAULT_PRIORITIES.map(p => p.id);
      const uniqueIds = [...new Set(ids)];
      expect(uniqueIds).toHaveLength(DEFAULT_PRIORITIES.length);
    });

    it('should have unique labels', () => {
      const labels = DEFAULT_PRIORITIES.map(p => p.label);
      const uniqueLabels = [...new Set(labels)];
      expect(uniqueLabels).toHaveLength(DEFAULT_PRIORITIES.length);
    });

    it('should have sequential order values starting from 1', () => {
      const orders = DEFAULT_PRIORITIES.map(p => p.order).sort();
      expect(orders).toEqual([1, 2, 3, 4]);
    });

    it('should have valid hex color formats', () => {
      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
      DEFAULT_PRIORITIES.forEach(priority => {
        expect(priority.color).toMatch(hexColorRegex);
      });
    });

    it('should contain expected priority levels', () => {
      const expectedIds = ['critical', 'high', 'medium', 'low'];
      const expectedLabels = ['Critical', 'High', 'Medium', 'Low'];
      
      const actualIds = DEFAULT_PRIORITIES.map(p => p.id);
      const actualLabels = DEFAULT_PRIORITIES.map(p => p.label);
      
      expectedIds.forEach(id => {
        expect(actualIds).toContain(id);
      });
      
      expectedLabels.forEach(label => {
        expect(actualLabels).toContain(label);
      });
    });

    it('should have critical as highest priority (order 1)', () => {
      const critical = DEFAULT_PRIORITIES.find(p => p.id === 'critical');
      expect(critical?.order).toBe(1);
    });

    it('should have low as lowest priority (order 4)', () => {
      const low = DEFAULT_PRIORITIES.find(p => p.id === 'low');
      expect(low?.order).toBe(4);
    });

    it('should have appropriate colors for each priority level', () => {
      const critical = DEFAULT_PRIORITIES.find(p => p.id === 'critical');
      const high = DEFAULT_PRIORITIES.find(p => p.id === 'high');
      const medium = DEFAULT_PRIORITIES.find(p => p.id === 'medium');
      const low = DEFAULT_PRIORITIES.find(p => p.id === 'low');
      
      // Critical should be red-ish
      expect(critical?.color).toBe('#f44336');
      
      // High should be orange-ish
      expect(high?.color).toBe('#ff9800');
      
      // Medium should be purple-ish
      expect(medium?.color).toBe('#9c27b0');
      
      // Low should be green-ish
      expect(low?.color).toBe('#4caf50');
    });

    it('should be sortable by order property', () => {
      const sorted = [...DEFAULT_PRIORITIES].sort((a, b) => a.order - b.order);
      const expectedOrder = ['critical', 'high', 'medium', 'low'];
      const actualOrder = sorted.map(p => p.id);
      
      expect(actualOrder).toEqual(expectedOrder);
    });
  });
});
  