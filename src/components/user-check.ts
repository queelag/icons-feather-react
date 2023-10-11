import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserCheckElement } from '@aracna/icons-feather-web/elements/user-check-element'

export const IconFeatherUserCheck: ElementComponent<IconFeatherUserCheckElement, IconProps> = createBaseElementComponent<
  IconFeatherUserCheckElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-check', IconFeatherUserCheckElement)
