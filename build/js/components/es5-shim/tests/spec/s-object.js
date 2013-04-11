describe("Object",function(){describe("Object.keys",function(){var e={str:"boz",obj:{},arr:[],bool:!0,num:42,"null":null,"undefined":undefined},t=[];for(var n in e)t.push(n);var r=Object.keys(e);it("should have correct length",function(){expect(r.length).toBe(7)}),it("should return an Array",function(){expect(Array.isArray(r)).toBe(!0)}),it("should return names which are own properties",function(){r.forEach(function(t){expect(e.hasOwnProperty(t)).toBe(!0)})}),it("should return names which are enumerable",function(){r.forEach(function(e){expect(t.indexOf(e)).toNotBe(-1)})}),it("should throw error for non object",function(){var e={};expect(function(){try{Object.keys(42)}catch(t){throw e}}).toThrow(e)})}),describe("Object.isExtensible",function(){var e={};it("should return true if object is extensible",function(){expect(Object.isExtensible(e)).toBe(!0)}),it("should return false if object is not extensible",function(){expect(Object.isExtensible(Object.preventExtensions(e))).toBe(!1)}),it("should return false if object is seal",function(){expect(Object.isExtensible(Object.seal(e))).toBe(!1)}),it("should return false if object is freeze",function(){expect(Object.isExtensible(Object.freeze(e))).toBe(!1)}),it("should throw error for non object",function(){var e={};expect(function(){try{Object.isExtensible(42)}catch(t){throw e}}).toThrow(e)})})});