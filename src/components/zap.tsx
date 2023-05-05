import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZapElement } from '@aracna/icons-feather-web/elements/zap-element.js'

export const IconFeatherZap: ElementComponent<IconFeatherZapElement, IconProps> = createBaseElementComponent<
  IconFeatherZapElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zap', IconFeatherZapElement)
