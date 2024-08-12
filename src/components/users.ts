import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUsersElement } from '@aracna/icons-feather-web/elements/users-element'

export const IconFeatherUsers: ElementComponent<IconFeatherUsersElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUsersElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-users', IconFeatherUsersElement)
