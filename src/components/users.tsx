import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUsersElement } from '@aracna/icons-feather-web/elements/users-element.js'

export const IconFeatherUsers: ElementComponent<IconFeatherUsersElement, IconProps> = createBaseElementComponent<
  IconFeatherUsersElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-users', IconFeatherUsersElement)
