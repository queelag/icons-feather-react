import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUsersElement } from '@aracna/icons-feather-web/elements/users-element'

export const IconFeatherUsers: ElementComponent<IconFeatherUsersElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUsersElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-users', IconFeatherUsersElement)
