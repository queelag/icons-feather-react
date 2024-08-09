import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMicElement } from '@aracna/icons-feather-web/elements/mic-element'

export const IconFeatherMic: ElementComponent<IconFeatherMicElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMicElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-mic', IconFeatherMicElement)
