import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherToggleRightElement } from '@aracna/icons-feather-web/elements/toggle-right-element'

export const IconFeatherToggleRight: ElementComponent<IconFeatherToggleRightElement, IconProps> = createBaseElementComponent<
  IconFeatherToggleRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-toggle-right', IconFeatherToggleRightElement)
