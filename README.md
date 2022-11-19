## Short introduction to Xstate

XState is a implementation of **[Statecharts](https://pdf.sciencedirectassets.com/271600/1-s2.0-S0167642300X00603/1-s2.0-0167642387900359/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLWVhc3QtMSJHMEUCIEB%2FNdTHRam3xNVGmmPL0%2FayP3NvYHO1D8sj4SWPQ3OcAiEAt5CmjX%2F2aG%2FKnGT66QvIP3a3NcRX8wEKqwlhshUUGrwqzAQIHhAFGgwwNTkwMDM1NDY4NjUiDMXwLhKk1sRLhyhfOSqpBEIPiTot8g1J8zdeJCNgjWtrMa0S%2Bknjzcu9xSHr%2FdVgAxZOC0bOMXquOvW9xObg44pb4UqMojiE%2FodGJTkkvFMPjOEaeXgcmo2XQVwXpHbraWx%2BE5VYcIV9bucK%2FdWoAXWHo40MPCeInyZBbQKl2GPCsCYEzocuDZjvOoaM6VZde5Z6jvJWn%2FA5v3NkpI7V0oCTf6KZ%2FxnH3A8lfrA1Bmhi3itU2XOFF0LrrzH2qyuSR2JtfxUcb1sxfLUGGV8eBQfESDJqBx7L%2FdUsl9Ce%2B4u6e5SaNA01cxoeY%2B0DMlOI2fZNgIKYs%2FUHNmlwrHMPLIEL7Z3jy3bu2kVGafnVPFYc%2FeDUW78nwWcJ%2BW%2BKuxspY5gznbpUN7zBNPkvDP5XdpsWSEPFmnhqapJBK1aaeoMEskW7vbIgpDUCZY2D527Yus%2B1TefQHm38YJxTskSw%2FicxSkeq3ABQxG7Fwn9VkttCTsOLvTFkuJl4thvlx0WIUdwS13PmPK9VEgemABvZMJvVy3z1tudu3agS8q6K%2BcQnBB4B9IhpRIukJAAheOKfrMaTKTdU93iDilW6AnIuZ2dKsHynnfnfNsxwC%2BD6hnuZoXAhaIUcff5hR7vHX6toZNHUS%2BFSkkrcA0%2FxgIss5gbmkabeQyfOssWwc30Bxk6i6bfTGC8j7Rvd3bAsmos6fZRWN8%2BNk0sYrhvJYj4pAvNkpCYGq15VeOg2GVQk7wCFqPW7HYm%2FZbQwno3VmwY6qQE7vSGyeB6%2Bmd%2FcEQ27oKW%2BgWDKHB5xL%2B8cEK4MX96H5P8abhXcWjyvxIJvNJVAMbTb7DT0GcOSJFhIPImoJWIHjapfCQxmGYb0oShHzTP%2FbN5LK0EJOKVXiyvX%2BYywO0XG43terk0jyy1ZpGXyLNp08pVB4VhUg5lWsnKzrJAmRVF7EzIG8Bjs5TvcN4j61EIs26X4AgEvOy10PvYG4S9aaK00NR9vFVA9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221116T215907Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY2MTPPP4O%2F20221116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e38488438afd037f4d7de8bd8c6e071df44e6d26ff23ba61e79928a00f024fda&hash=1d4916fd19d0ddcc9b139fe8d9c5052866814462f95b805f093f9a4d47b8a745&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=0167642387900359&tid=spdf-c523505d-2eea-4eae-9af4-1ae83f797e0d&sid=f2a0ff886e08b945ac4ab6570af7d8e4159bgxrqb&type=client&ua=51550752590b00010157&rr=76b37defb947f840)**, a graphical way to represent complexity in code.
Every you need to know is inside the [docs](https://xstate.js.org/docs/).

<br>

## Problems

- [x] Orthogonal/parallel state
> To matches a parallel state, you need to put as parameter an entire object. Generally, you only need to know if the state is inside a child or a grandchild of the current state. XState is recursive, so for a small check, you can write a deep recursive object as parameter with infinite nested children.

- [x] Compound state
> It’s the same problem as orthogonal but with less complexity. Here, I want to emphasize the problem of nested objects. Sometimes you only need to know if the state is inside the parent and you don’t care about the children. But in the current configuration of [state.matches](https://xstate.js.org/docs/guides/states.html#state-methods-and-properties), you need to put as parameter and the nested **<u>current</u>** children.


- [ ] Direct implementation polyfill for core XState
> Not yet implemented

<br>

## The solution
A function to match with string representation of the current state or parent, or grandparent 😌😵‍💫, or… You see where I want to go!

I listed the cases inside this code block.

```typescript
```

<br>
<br>

*Enjoy your [function](https://github.com/chlbri/x-matches)* ✌🏾😎 *!*
