### 记录一些问题

#### has no exported member 'Dispatch'.

https://github.com/Microsoft/TypeScript-React-Starter/issues/160

```typescript
import { connect, Dispatch } from 'react-redux';
```

高版本的更换为

```typescript
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
```