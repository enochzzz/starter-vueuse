## Usage
Add your module information, routing information to the modules file under ```meta/modules.ts```.The format is as follows:
```
{
    name: 'guide',
    description: 'this is guide',
    author: 'enoch <https://github.com/enochzzz>',
    children: [
      {
        name: 'guide',
        route: '/guide/',
      },
    ],
  },
```
