import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserXElement } from '@aracna/icons-feather-web/elements/user-x-element'

export const IconFeatherUserX: ElementComponent<IconFeatherUserXElement, IconProps> = createBaseElementComponent<
  IconFeatherUserXElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-x', IconFeatherUserXElement)
