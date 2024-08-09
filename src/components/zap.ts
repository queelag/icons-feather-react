import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherZapElement } from '@aracna/icons-feather-web/elements/zap-element'

export const IconFeatherZap: ElementComponent<IconFeatherZapElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZapElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-zap', IconFeatherZapElement)
