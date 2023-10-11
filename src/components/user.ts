import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserElement } from '@aracna/icons-feather-web/elements/user-element'

export const IconFeatherUser: ElementComponent<IconFeatherUserElement, IconProps> = createBaseElementComponent<
  IconFeatherUserElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user', IconFeatherUserElement)
