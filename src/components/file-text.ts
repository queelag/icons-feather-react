import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFileTextElement } from '@aracna/icons-feather-web/elements/file-text-element'

export const IconFeatherFileText: ElementComponent<IconFeatherFileTextElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFileTextElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-file-text', IconFeatherFileTextElement)
