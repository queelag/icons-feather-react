import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZapOffElement } from '@aracna/icons-feather-web/elements/zap-off-element.js'

export const IconFeatherZapOff: ElementComponent<IconFeatherZapOffElement, IconProps> = createBaseElementComponent<
  IconFeatherZapOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zap-off', IconFeatherZapOffElement)
