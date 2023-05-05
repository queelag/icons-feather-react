import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCheckElement } from '@aracna/icons-feather-web/elements/check-element.js'

export const IconFeatherCheck: ElementComponent<IconFeatherCheckElement, IconProps> = createBaseElementComponent<
  IconFeatherCheckElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-check', IconFeatherCheckElement)
