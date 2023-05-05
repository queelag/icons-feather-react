import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserPlusElement } from '@aracna/icons-feather-web/elements/user-plus-element.js'

export const IconFeatherUserPlus: ElementComponent<IconFeatherUserPlusElement, IconProps> = createBaseElementComponent<
  IconFeatherUserPlusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-plus', IconFeatherUserPlusElement)
