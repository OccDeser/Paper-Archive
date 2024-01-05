# Network and Distributed System Security Symposium 2023
## Assessing the Impact of Interface Vulnerabilities in Compartmentalized Software.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#assessing-the-impact-of-interface-vulnerabilities-in-compartmentalized-software) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#assessing-the-impact-of-interface-vulnerabilities-in-compartmentalized-software)**
### 作者
* Hugo Lefeuvre, The University of Manchester
* Vlad-Andrei Bădoiu, University Politehnica of Bucharest
* Yi Chen, Rice University
* Felipe Huici, Unikraft.io
* Nathan Dautenhahn, Rice University
* Pierre Olivier, The University of Manchester
### 摘要
> 最小权限分离将应用程序分解为只能访问其所需内容的隔离区域。在隔离现有软件时，许多方法忽略了保护新的隔离区域间接口的安全性，尽管过去可能是从/到可信组件的函数调用，现在却有可能成为恶意隔离区域的有针对性攻击。这导致了一整类安全漏洞：隔离区域接口漏洞（CIVs）。
> 
> 
> 
> 
> 
> 
> 
> 本文对CIVs进行了深入研究。我们对这些问题进行分类，并展示它们影响了所有已知的隔离化方法。我们提出了ConfFuzz，一种专门用于在可能的隔离区域边界上检测CIVs的内存中模糊器。我们将ConfFuzz应用于一组25个常用应用程序和36个可能的隔离区域API，以发现一个包含629个漏洞的广泛数据集。我们系统地研究了这些问题，并提取了关于CIVs的普遍性、其原因、影响以及解决它们的复杂性的众多见解。我们强调了CIVs在隔离化方法中的重要性，演示了在OpenSSL中提取孤立密钥的攻击，并揭示了sudo中存在已有十年的漏洞。我们同时还展示了，并非所有接口都受到相同的影响，API大小与CIV的普遍性无关，以及解决接口漏洞超出了编写简单检查的范畴。本文最后给出了针对CIV感知的隔离区域接口设计指南，并呼吁进行更多关于系统性CIV检测和缓解的研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/assessing-the-impact-of-interface-vulnerabilities-in-compartmentalized-software/](https://www.ndss-symposium.org/ndss-paper/assessing-the-impact-of-interface-vulnerabilities-in-compartmentalized-software/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-117-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-117-paper.pdf)
## Let Me Unwind That For You: Exceptions to Backward-Edge Protection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#let-me-unwind-that-for-you-exceptions-to-backward-edge-protection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#let-me-unwind-that-for-you-exceptions-to-backward-edge-protection)**
### 作者
* Victor Duta, Vrije Universiteit Amsterdam
* Fabian Freyer, University of California San Diego
* Fabio Pagani, University of California
### 摘要
> 通过堆栈缓冲区溢出进行反向边控制流劫持是软件利用的圣杯。直接控制关键堆栈数据和被劫持的目标使得这种利用策略对攻击者特别具有吸引力。因此，社区部署了强力的反向边保护措施，如影子堆栈或堆栈金丝雀，迫使攻击者只能采取不理想的堆基础利用策略。然而，这些缓解措施通常依赖于一个关键假设，即攻击者依赖返回地址的损坏来直接劫持函数返回时的控制流。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们针对这一假设提出了*例外情况*，并展示了基于反向边控制流劫持的攻击*不需要*直接劫持的可能性。具体而言，我们演示了堆栈损坏可以导致异常处理充当*迷惑代理*并代表攻击者进行反向边控制流劫持攻击。这种策略提供了被忽视的机会，将执行转移到由攻击者控制的catch处理程序上（我们将其称为CHOP，即Catch处理程序导向编程），并创建强大的基元，如任意代码执行或任意内存写入。我们发现CHOP风格的攻击适用于多个平台（Linux、Windows、macOS、Android和iOS）。为了分析揭示的攻击面，我们调查了流行的开源软件包，并研究了所提出的利用技术的适用性。我们的分析显示，适合异常处理的目标在C++程序中普遍存在，可被利用的异常处理程序也很常见。最后，我们通过提供三个真实软件的端到端利用示例，并提出对已部署的缓解措施进行改进以应对CHOP。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/let-me-unwind-that-for-you-exceptions-to-backward-edge-protection/](https://www.ndss-symposium.org/ndss-paper/let-me-unwind-that-for-you-exceptions-to-backward-edge-protection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-295-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-295-paper.pdf)
## VulHawk: Cross-architecture Vulnerability Detection with Entropy-based Binary Code Search.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#vulhawk-cross-architecture-vulnerability-detection-with-entropy-based-binary-code-search) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#vulhawk-cross-architecture-vulnerability-detection-with-entropy-based-binary-code-search)**
### 作者
* Zhenhao Luo, College of Computer
### 摘要
> 代码重用在软件开发中非常普遍。它导致了漏洞的广泛传播，对软件安全构成威胁。不幸的是，在物联网（IoT）的发展和部署过程中，代码重用的危害被放大了。二进制代码搜索是一种找出这些隐藏漏洞的可行方法。面对由不同编译器、不同优化级别和不同体系结构编译的物联网固件镜像，现有的方法难以适应这些复杂的场景。在本文中，我们提出了一种新颖的中间表示函数模型，该模型是一种面向体系结构无关的用于跨体系结构二进制代码搜索的模型。它通过补充隐含操作数和修剪冗余指令，将二进制代码转换为微代码，并保留二进制函数的主要语义。然后，我们使用自然语言处理技术和图卷积网络来生成函数嵌入。我们将编译器、体系结构和优化级别的组合称为文件环境，并采用分而治之的策略将一个$C_N^2$交叉文件环境场景的相似性计算问题划分为N-1个嵌入传输子问题。我们提出了一种基于熵的适配器，将来自不同文件环境的函数嵌入转换为相同的文件环境，以减轻不同文件环境引起的差异。为了准确识别脆弱函数，我们提出了一种渐进搜索策略，将函数嵌入与细粒度特征相结合，以减少修补函数引起的误报。我们实现了一个名为VulHawk的原型，并进行了七个不同任务的实验来评估其性能和鲁棒性。实验结果显示，VulHawk在Asm2Vec、Asteria、BinDiff、GMN、PalmTree、SAFE和Trex方面表现优于它们。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/vulhawk-cross-architecture-vulnerability-detection-with-entropy-based-binary-code-search/](https://www.ndss-symposium.org/ndss-paper/vulhawk-cross-architecture-vulnerability-detection-with-entropy-based-binary-code-search/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-415-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-415-paper.pdf)
## Towards Automatic and Precise Heap Layout Manipulation for General-Purpose Programs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#towards-automatic-and-precise-heap-layout-manipulation-for-general-purpose-programs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#towards-automatic-and-precise-heap-layout-manipulation-for-general-purpose-programs)**
### 作者
* Runhao Li, National University of Defense Technology
* Bin Zhang, National University of Defense Technology
* Jiongyi Chen, National University of Defense Technology
* Wenfeng Lin, National University of Defense Technology
* Chao Feng, National University of Defense Technology
* Chaojing Tang, National University of Defense Technology
### 摘要
> 自动利用生成中的一个关键挑战是确定是否可以通过操纵堆布局来构造可利用的状态。通常，这是通过根据编程的堆操作使用编排战略重新排列堆内存中的对象来实现的。然而，由于程序逻辑的复杂性和堆分配机制的困难，难以在战略上协调使用堆操作，因此尚未实现针对通用目的程序的精确堆布局操纵目标。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了BAGUA，这是一个创新的解决方案，可以自动和精确地操纵通用目的程序的堆布局。具体而言，BAGUA首先使用堆操作依赖图精确地识别堆布局操纵的基本操作，并深入分析它们的依赖关系和能力。在此基础上，它将堆布局操纵建模为一个整数线性规划问题，并求解约束条件，以确定实现所需堆布局的基本操作序列。通过以此顺序触发基本操作，我们能够构造目标程序的新的概念证明输入，以实现可利用的堆布局。我们研究的亮点包括一系列新技术，解决了分析通用目的程序的特定挑战，例如消除堆分配器的副作用和扩展堆布局操纵的能力。我们实现了BAGUA的原型，并在27个已知公开程序中对其进行评估。由于BAGUA在确定基本操作和处理堆分配器的副作用方面的优势，它成功为23个漏洞生成了所需的堆布局，这远远超出了先前研究的成果。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-automatic-and-precise-heap-layout-manipulation-for-general-purpose-programs/](https://www.ndss-symposium.org/ndss-paper/towards-automatic-and-precise-heap-layout-manipulation-for-general-purpose-programs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-232-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-232-paper.pdf)
## Backdoor Attacks Against Dataset Distillation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#backdoor-attacks-against-dataset-distillation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#backdoor-attacks-against-dataset-distillation)**
### 作者
* Yugeng Liu, CISPA Helmholtz Center for Information Security
* Zheng Li, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yun Shen, Netapp
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 数据集提炼已成为训练机器学习模型时提高数据效率的一种重要技术。它将大型数据集的知识集成到较小的合成数据集中。在这个较小的提炼数据集上训练的模型可以达到与在原始训练数据集上训练的模型相当的性能。然而，现有的数据集提炼技术主要旨在实现资源使用效率和模型效用之间的最佳平衡，但由此引发的安全风险尚未得到探究。本研究针对图像领域的数据集提炼模型训练的模型进行了首次后门攻击。具体而言，我们在提炼过程中而不是模型训练阶段注入触发器，以前的攻击都是在模型训练阶段进行的。我们提出了两种类型的后门攻击，即NAIVEATTACK和DOORPING。NAIVEATTACK只是在初始提炼阶段向原始数据添加触发器，而DOORPING在整个提炼过程中迭代更新触发器。我们对多个数据集、架构和数据集提炼技术进行了广泛评估。实证评估结果表明，NAIVEATTACK在某些情况下获得了不错的攻击成功率（ASR）得分，而DOORPING在所有情况下达到了更高的ASR得分（接近1.0）。此外，我们进行了全面的消融研究，以分析可能影响攻击性能的因素。最后，我们评估了多个防御机制对我们的后门攻击，并表明我们的攻击可以实际绕过这些防御机制。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/backdoor-attacks-against-dataset-distillation/](https://www.ndss-symposium.org/ndss-paper/backdoor-attacks-against-dataset-distillation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-287-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-287-paper.pdf)
## REaaS: Enabling Adversarially Robust Downstream Classifiers via Robust Encoder as a Service.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#reaas-enabling-adversarially-robust-downstream-classifiers-via-robust-encoder-as-a-service) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#reaas-enabling-adversarially-robust-downstream-classifiers-via-robust-encoder-as-a-service)**
### 作者
* Wenjie Qu, Huazhong University of Science and Technology
* Jinyuan Jia, University of Illinois Urbana-Champaign
* Neil Zhenqiang Gong, Duke University
### 摘要
> 编码器作为一种新兴的云服务。具体而言，服务提供商首先通过监督学习或自监督学习预训练一个编码器（即通用特征提取器），然后将其部署为云服务API。客户端查询云服务API以获取其训练/测试输入的特征向量，用于训练/测试其分类器（称为下游分类器）。下游分类器容易受到敌对示例的影响，这些示例是经过精心设计扰动的测试输入，使得下游分类器将其错误地分类。因此，在安全关键应用中，客户端的目标是构建强大的下游分类器，并对其针对敌对示例的鲁棒性进行认证。云服务应该提供哪些API，以便客户端可以使用任何认证方法对其下游分类器针对敌对示例的鲁棒性进行认证，并同时尽量减少对API的查询次数？服务提供商如何预训练编码器，以使客户能够构建更具可认证鲁棒性的下游分类器？我们旨在通过本研究回答这两个问题。对于第一个问题，我们展示了云服务只需要提供两个API，我们精心设计的API，就能使客户在最少查询API的情况下对其下游分类器的鲁棒性进行认证。对于第二个问题，我们展示了使用谱范数正则化项预训练的编码器能够使客户构建更具鲁棒性的下游分类器。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/reaas-enabling-adversarially-robust-downstream-classifiers-via-robust-encoder-as-a-service/](https://www.ndss-symposium.org/ndss-paper/reaas-enabling-adversarially-robust-downstream-classifiers-via-robust-encoder-as-a-service/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-444-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-444-paper.pdf)
## Adversarial Robustness for Tabular Data through Cost and Utility Awareness.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#adversarial-robustness-for-tabular-data-through-cost-and-utility-awareness) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#adversarial-robustness-for-tabular-data-through-cost-and-utility-awareness)**
### 作者
* Klim Kireev, EPFL
* Bogdan Kulynych, EPFL
* Carmela Troncoso, EPFL
### 摘要
> 机器学习的许多安全关键应用，如欺诈或滥用检测，使用表格数据。对于这些应用来说，对抗性示例可能特别具有破坏性。然而，现有关于对抗鲁棒性的研究主要集中在图像和文本领域的机器学习模型上。我们认为，由于表格数据与图像或文本之间存在的差异，现有的威胁模型并不适用于表格域。这些模型不能捕捉到攻击的代价可能比不可察觉性更重要，或者对于部署不同的对抗性示例所获得的效用可以分配不同的值。我们证明，由于这些差异，用于图像和文本的攻击和防御方法不能直接应用于表格设置。我们通过提出新的成本和效用感知的威胁模型来解决这些问题，这些模型适用于针对表格域的攻击者的对抗能力和约束条件。我们引入了一个框架，使我们能够设计攻击和防御机制，从而获得对抗成本或效用感知的模型，例如受某种财务预算限制的攻击者。我们展示了我们的方法在三个数据集上的有效性，这些数据集对应于对抗性示例可能具有经济和社会影响的应用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/adversarial-robustness-for-tabular-data-through-cost-and-utility-awareness/](https://www.ndss-symposium.org/ndss-paper/adversarial-robustness-for-tabular-data-through-cost-and-utility-awareness/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-924-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-924-paper.pdf)
## Focusing on Pinocchio's Nose: A Gradients Scrutinizer to Thwart Split-Learning Hijacking Attacks Using Intrinsic Attributes.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#focusing-on-pinocchios-nose-a-gradients-scrutinizer-to-thwart-split-learning-hijacking-attacks-using-intrinsic-attributes) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#focusing-on-pinocchios-nose-a-gradients-scrutinizer-to-thwart-split-learning-hijacking-attacks-using-intrinsic-attributes)**
### 作者
* Jiayun Fu, Huazhong University of Science and Technology
* Xiaojing Ma, Huazhong University of Science and Technology
* Bin B. Zhu, Microsoft Research Asia
* Pingyi Hu, Huazhong University of Science and Technology
* Ruixin Zhao, Huazhong University of Science and Technology
* Yaru Jia, Huazhong University of Science and Technology
* Peng Xu, Huazhong University of Science and Technology
* Hai Jin, Huazhong University of Science and Technology
* Dongmei Zhang, Microsoft Research
### 摘要
> 分散学习是一种最近流行的保护隐私的分布式学习方法，但它也面临着新的安全挑战。全协作分割攻击（FSHA）是对分散学习的一种严重威胁。在FSHA中，恶意服务器劫持训练，欺骗客户端训练自编码器的编码器，而不是分类模型。客户端发送给服务器的中间结果实际上是私有训练样本的潜在编码，可以通过自编码器的解码器从接收到的编码中高保真地重构。SplitGuard是目前唯一有效的防御劫持攻击的方法。它是一种主动的方法，通过注入虚假标记数据来引发异常行为以检测劫持攻击。这种注入也会对预期模型的诚实训练产生不利影响。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首先证明了SplitGuard对一种自适应劫持攻击SplitSpy是脆弱的。SplitSpy利用了SplitGuard用来检测劫持攻击的相同特性。在SplitSpy中，恶意服务器维护了一个影子模型，执行预期任务以检测虚假标记数据并躲避SplitGuard。我们的实验评估表明，SplitSpy能够有效躲避SplitGuard。然后，我们提出了一种新颖的被动检测方法，名为梯度审查器，它依赖于预期模型和恶意模型之间梯度的内在差异：对于预期模型，相同标签样本的梯度之间的预期相似度与不同标签样本的梯度之间的预期相似度不同，而对于恶意模型，它们是相同的。这种内在区分能力使得梯度审查器能够有效地检测到分散学习劫持攻击，而不会干扰预期模型的诚实训练。我们的广泛评估结果显示，梯度审查器能够有效地阻止已知的分散学习劫持攻击及其自适应反击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/focusing-on-pinocchios-nose-a-gradients-scrutinizer-to-thwart-split-learning-hijacking-attacks-using-intrinsic-attributes/](https://www.ndss-symposium.org/ndss-paper/focusing-on-pinocchios-nose-a-gradients-scrutinizer-to-thwart-split-learning-hijacking-attacks-using-intrinsic-attributes/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-874-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-874-paper.pdf)
## ProbFlow : Using Probabilistic Programming in Anonymous Communication Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#probflow-using-probabilistic-programming-in-anonymous-communication-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#probflow-using-probabilistic-programming-in-anonymous-communication-networks)**
### 作者
* Hussein Darir, University of Illinois Urbana-Champaign
* Geir Dullerud, University of Illinois Urbana-Champaign
* Nikita Borisov, University of Illinois Urbana-Champaign
### 摘要
> 我们介绍了ProbFlow，一种用于估计Tor网络中中继容量的概率编程方法。我们对先前推导出的网络概率模型进行了改进，以考虑现实世界Tor网络的复杂性。我们使用这个模型在一个名为NumPyro的概率编程语言中进行推断，这使我们能够克服纯分析方法中存在的分析障碍。我们将ProbFlow的实现集成到Tor网络中当前的容量估计算法实现中。我们通过在基于流的Python模拟器和基于数据包的Shadow模拟器中模拟ProbFlow来展示其实际效益，Shadow模拟器是Tor网络中最高保真度的模拟器。在这两个模拟器中，ProbFlow提供了更准确的估计结果，从而改善了用户性能，Shadow模拟中的平均下载速度提高了25%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/probflow-using-probabilistic-programming-in-anonymous-communication-networks/](https://www.ndss-symposium.org/ndss-paper/probflow-using-probabilistic-programming-in-anonymous-communication-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-140-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-140-paper.pdf)
## PPA: Preference Profiling Attack Against Federated Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#ppa-preference-profiling-attack-against-federated-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#ppa-preference-profiling-attack-against-federated-learning)**
### 作者
* Chunyi Zhou, Nanjing University of Science and Technology
* Yansong Gao, Nanjing University of Science and Technology
* Anmin Fu, Nanjing University of Science and Technology
* Kai Chen, Chinese Academy of Science
* Zhiyang Dai, Nanjing University of Science and Technology
* Zhi Zhang, CSIRO's Data61
* Minhui Xue, CSIRO's Data61
* Yuqing Zhang, University of Chinese Academy of Science
### 摘要
> 联邦学习（FL）在许多分散式用户之间训练一个全局模型，每个用户都有一个本地数据集。与传统的集中式学习相比，FL不需要直接访问本地数据集，因此旨在减轻数据隐私问题。然而，FL中仍然存在数据隐私泄露问题，包括成员推断、属性推断和数据倒置等推断攻击。
> 
> 
> 
> 
> 
> 
> 
> 在本研究中，我们提出了一种新的隐私推断攻击类型，称为偏好特征攻击（PPA），可以准确地对本地用户的私人偏好进行特征分析，例如客户在线购物中最喜欢（或不喜欢）的商品以及用户自拍中最常见的表情。总的来说，PPA可以根据本地客户（用户）的特征分析他们的前k个（即k=1, 2, 3，特别地，k=1时）偏好。我们的关键洞察是，本地用户模型的梯度变化对于给定类别的样本比例具有可区分的敏感性，特别是对于主要（次要）类别。通过观察用户模型对类别的梯度敏感性，PPA可以分析用户本地数据集中该类别的样本比例，从而暴露用户对该类别的偏好。FL的固有统计异质性进一步促进了PPA的攻击。我们广泛评估了PPA的有效性，使用了四个数据集（MNIST，CIFAR10，RAF-DB和Products-10K）。我们的结果显示，在MNIST和CIFAR10上，PPA分别实现了90%和98%的top-1攻击准确率。更重要的是，在购物（即Products-10K）和社交网络（即RAF-DB）的实际商业场景中，PPA可以达到78%的top-1攻击准确率，以推断出最常购买的商品（作为商业竞争对手），以及88%的top-1攻击准确率，以推断出受害用户最常见的面部表情，例如厌恶。对于Products-10K和RAF-DB，top-3攻击准确率和top-2攻击准确率分别高达88%和100%。我们还证明，PPA对于FL的本地用户数量（我们测试了最多100个）和本地训练轮数（我们测试了最多20轮）不敏感。尽管现有的防御措施，如dropout和差分隐私保护，可以在一定程度上降低PPA的准确性，但它们不可避免地会对全局模型造成明显的恶化。源代码可在https://github.com/PPAattack找到。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ppa-preference-profiling-attack-against-federated-learning/](https://www.ndss-symposium.org/ndss-paper/ppa-preference-profiling-attack-against-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-171-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-171-paper.pdf)
## RAI2: Responsible Identity Audit Governing the Artificial Intelligence.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rai2-responsible-identity-audit-governing-the-artificial-intelligence) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rai2-responsible-identity-audit-governing-the-artificial-intelligence)**
### 作者
* Tian Dong, Shanghai Jiao Tong University
* Shaofeng Li, Shanghai Jiao Tong University
* Guoxing Chen, Shanghai Jiao Tong University
* Minhui Xue, CSIRO's Data61
* Haojin Zhu, Shanghai Jiao Tong University
* Zhen Liu, Shanghai Jiao Tong University
### 摘要
> 身份在负责任的人工智能（AI）中扮演重要角色：它作为深度学习（DL）模型的唯一标识，并可用于追踪对模型不负责任使用的责任者。因此，有效的DL身份审计对于构建负责任的AI至关重要。除了模型之外，训练数据集确定了模型可以学习的特征，因此在身份审计中应同等关注。在这项工作中，我们提出了第一个实用的方案，命名为RAI2，用于对数据集和模型进行负责任的身份审计。我们开发了数据集和模型相似度估计方法，可以与对嫌疑模型黑盒访问配合工作。所提出的方法可以通过估计所有者和嫌疑者之间的相似度来定量确定数据集和模型的身份。最后，我们基于承诺方案实现了负责任的审计方案，使所有者能够将数据集和模型注册到受信任的第三方（TTP），该第三方负责数据集和模型的监管以及版权侵权的取证工作。在14种模型架构和6个视觉和文本数据集上进行的广泛评估表明，我们的方案可以通过所提出的相似度估计方法准确识别数据集和模型。我们希望我们的审计方法不仅能够弥补在实现身份仲裁方面的差距，还能够随着AI治理在这个混乱的世界中蓬勃发展。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rai2-responsible-identity-audit-governing-the-artificial-intelligence/](https://www.ndss-symposium.org/ndss-paper/rai2-responsible-identity-audit-governing-the-artificial-intelligence/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-1012-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-1012-paper.pdf)
## Faster Secure Comparisons with Offline Phase for Efficient Private Set Intersection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#faster-secure-comparisons-with-offline-phase-for-efficient-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#faster-secure-comparisons-with-offline-phase-for-efficient-private-set-intersection)**
### 作者
* Florian Kerschbaum, University of Waterloo
* Erik-Oliver Blass, Airbus
* Rasoul Akhavan Mahdavi, University of Waterloo
### 摘要
> 在私密交叉点（PSI）协议中，艾丽斯和鲍勃计算各自集合的交集，而不会透露任何不属于交集的元素。PSI协议已经在文献中得到广泛研究，并且已在工业领域得到应用。随着最先进的协议实现了最优渐近复杂度，性能改进变得很少，只能改进复杂度常数。在本文中，我们提出了一种新的私密、极高效的比较协议，该协议可以导致具有较低常数的PSI协议。我们比较协议的一个有用特性是它可以分为在线阶段和离线阶段。所有昂贵的加密操作都在离线阶段进行，而在线阶段每个比较仅执行四个快速的字段操作。这导致了一个非常快速的在线阶段，我们的评估结果显示，它在性能上优于相关的研究成果，包括KKRT（CCS'16）、VOLE-PSI（EuroCrypt'21）和OKVS（Crypto'21）。我们还评估了使用不同可信假设（加密、硬件和第三方“经销商模型”）实现离线阶段的标准方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/faster-secure-comparisons-with-offline-phase-for-efficient-private-set-intersection/](https://www.ndss-symposium.org/ndss-paper/faster-secure-comparisons-with-offline-phase-for-efficient-private-set-intersection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-198-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-198-paper.pdf)
## DiffCSP: Finding Browser Bugs in Content Security Policy Enforcement through Differential Testing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#diffcsp-finding-browser-bugs-in-content-security-policy-enforcement-through-differential-testing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#diffcsp-finding-browser-bugs-in-content-security-policy-enforcement-through-differential-testing)**
### 作者
* Seongil Wi, KAIST
* Trung Tin Nguyen, CISPA Helmholtz Center for Information Security
### 摘要
> 内容安全策略（CSP）是减轻网络威胁的一种事实上的安全机制之一。许多网站主要部署CSP来减轻跨站脚本（XSS）攻击，通过指示客户端浏览器限制JavaScript（JS）执行。然而，CSP执行中的浏览器漏洞使得对手可以绕过部署的CSP，构成了安全威胁。随着CSP规范的发展，CSP在支持越来越多指令时变得更加复杂，这给正确实施执行行为带来了额外的复杂性。不幸的是，CSP执行错误的系统化发现在很大程度上还未被深入研究。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了DiffCSP，是第一个用于发现涉及JS执行的CSP执行错误的差异测试框架。DiffCSP生成CSPs和一套全面的HTML实例，展示了所有已知的执行JS代码片段的方法。然后，DiffCSP在不同浏览器中为每个生成的策略执行每个HTML实例，从而收集不一致的执行结果。为了分析大量的执行结果，我们利用决策树，并确定观察到的不一致性的共同原因。我们通过发现29个安全错误和8个功能错误展示了DiffCSP的效果。我们还展示了三个错误是由于CSP规范描述不清楚所导致的。我们进一步确定了CSP执行错误的共同根本原因，例如错误的CSP继承和哈希处理。我们确认了客户端浏览器从相同的CSP中得出完全不同的解释的风险趋势，这引发了安全问题的关注。我们的研究证明了DiffCSP在发现CSP执行错误方面的有效性，我们的发现已经有助于修补了包括Chrome和Safari在内的主要浏览器中的12个安全错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/diffcsp-finding-browser-bugs-in-content-security-policy-enforcement-through-differential-testing/](https://www.ndss-symposium.org/ndss-paper/diffcsp-finding-browser-bugs-in-content-security-policy-enforcement-through-differential-testing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-200-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-200-paper.pdf)
## Browser Permission Mechanisms Demystified.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#browser-permission-mechanisms-demystified) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#browser-permission-mechanisms-demystified)**
### 作者
* Kazuki Nomoto, Waseda University
* Takuya Watanabe, NTT Social Informatics Laboratories
* Eitaro Shioji, NTT Social Informatics Laboratories
* Mitsuaki Akiyama, NTT Social Informatics Laboratories
* Tatsuya Mori, Waseda University/NICT/RIKEN AIP
### 摘要
> 现代Web服务通过访问用户设备上的资源（包括摄像头、麦克风和GPS等硬件设备）提供丰富的内容。Web浏览器供应商采用了权限机制，以实现对这些资源访问的适当控制，以保护用户隐私。权限机制使用户能够为每个网站授予或拒绝浏览器对资源的访问权限。尽管权限机制在保护用户隐私方面的重要性，但之前的研究尚未对其行为和实现进行系统的理解。在这项研究中，我们开发了Permium，一个Web浏览器分析框架，可以自动分析不同浏览器实现的权限机制的行为。使用Permium框架，我们系统地研究了22种主要浏览器实现在五种不同操作系统上（包括移动和桌面）的权限机制行为。我们确定权限机制的实现和行为在操作系统之间存在分散和不一致，即使是相同的浏览器（如Windows Chrome与iOS Chrome），这种实现不一致性可能导致隐私风险。根据我们的测量研究揭示的权限机制的行为和实现的不一致性，我们开发了两种概念验证攻击并评估了它们的可行性。第一种攻击利用利用这些不一致性收集的权限信息来秘密跟踪用户。第二种攻击旨在创建一种用户无法正确确定权限请求来源的情况，用户错误地授予权限给恶意网站。最后，我们阐明了隐私机制中必须标准化的技术问题，并向操作系统/浏览器供应商提供了缓解本研究中发现的威胁的建议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/browser-permission-mechanisms-demystified/](https://www.ndss-symposium.org/ndss-paper/browser-permission-mechanisms-demystified/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-109-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-109-paper.pdf)
## Drone Security and the Mysterious Case of DJI's DroneID.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#drone-security-and-the-mysterious-case-of-djis-droneid) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#drone-security-and-the-mysterious-case-of-djis-droneid)**
### 作者
* Nico Schiller, Ruhr-Universität Bochum
* Merlin Chlosta, CISPA Helmholtz Center for Information Security
* Moritz Schloegel, Ruhr-Universität Bochum
* Nils Bars, Ruhr University Bochum
* Thorsten Eisenhofer, Ruhr University Bochum
* Tobias Scharnowski, Ruhr-University Bochum
* Felix Domke, Independent
* Lea Schönherr, CISPA Helmholtz Center for Information Security
* Thorsten Holz, CISPA Helmholtz Center for Information Security
### 摘要
> 消费级无人机拍摄高级的航拍视频，有望改革物流行业，并已经在人道主义救援行动和武装冲突中得到应用。尽管无人机的广泛应用和普及率较高，但传统上受到严格监管的航空领域的准入门槛较低，这给安全、保密和隐私带来许多风险。恶意方可能会（滥）用无人机进行监视、运输非法货物，或通过侵入机场上方的封闭空域造成经济损失。为了防止伤害，无人机制造商采用了多种对策来强制实施无人机的安全和安全使用，例如，他们会限制速度和高度方面的软件限制，或者使用地理围栏在机场或监狱周围实施禁飞区。作为传统对策的补充，市场领导者DJI的无人机采用了一种名为DroneID的跟踪协议，该协议旨在将无人机及其操作员的位置传输给执法机构或关键基础设施的运营者。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们分析了无人机的安全性和隐私性问题，重点关注市场份额达94%的领先厂商DJI。我们首先系统化无人机的攻击面，并研究了能够窃听无人机的无线数据流量的攻击者。基于对DJI固件的逆向工程，我们设计并实现了一个仅使用廉价COTS硬件的DJI专有跟踪协议DroneID的解码器。我们表明传输的数据没有加密，而是任何人都可以访问，危及无人机操作员的隐私。其次，我们进行了一项全面的无人机安全分析：通过逆向工程、针对DJI通信协议量身定制的新型模糊测试方法和硬件分析的组合，我们发现了无人机固件中的几个关键漏洞，使攻击者可以在两种不同的DJI无人机和其遥控器上获得提升的特权。这种根用户权限可以禁用或绕过对策并滥用无人机。总共，我们发现了16个漏洞，范围从拒绝服务到任意代码执行。其中有14个漏洞可以通过操作员的智能手机远程触发，使我们能够在飞行过程中使无人机崩溃。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/drone-security-and-the-mysterious-case-of-djis-droneid/](https://www.ndss-symposium.org/ndss-paper/drone-security-and-the-mysterious-case-of-djis-droneid/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-217-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-217-paper.pdf)
## The "Beatrix" Resurrections: Robust Backdoor Detection via Gram Matrices.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#the-beatrix-resurrections-robust-backdoor-detection-via-gram-matrices) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#the-beatrix-resurrections-robust-backdoor-detection-via-gram-matrices)**
### 作者
* Wanlun Ma, Swinburne University of Technology
* Derui Wang, CSIRO’s Data61
* Ruoxi Sun, The University of Adelaide & CSIRO's Data61
* Minhui Xue, CSIRO's Data61
* Sheng Wen, Swinburne University of Technology
* Yang Xiang, Digital Research & Innovation Capability Platform
### 摘要
> 深度神经网络（DNN）在训练过程中容易受到后门攻击的影响。以这种方式被破坏的模型在正常情况下运行，但在输入中触发特定模式时，会产生预定义的目标标签。现有的防御措施通常依赖于全局后门设置的假设，其中中毒样本共享相同的统一触发器。然而，最近的先进后门攻击表明，在动态后门中，触发器会在每个输入中不断变化，从而打败现有的防御措施。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了一种新颖的技术，名为Beatrix（通过Gram矩阵进行后门检测）。Beatrix利用Gram矩阵不仅捕捉特征之间的相关性，还捕捉了表示的适当高阶信息。通过从正常样本的激活模式中学习类条件统计数据，Beatrix可以通过捕捉激活模式中的异常来识别中毒样本。为了进一步提高识别目标标签的性能，Beatrix利用基于核的测试，而不对表示分布做任何先验假设。我们通过广泛的评估和与最先进的防御技术进行比较，证明了我们方法的有效性。实验结果表明，我们的方法在检测动态后门方面的F1得分达到了91.1％，而最先进的方法仅能达到36.9％。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-beatrix-resurrections-robust-backdoor-detection-via-gram-matrices/](https://www.ndss-symposium.org/ndss-paper/the-beatrix-resurrections-robust-backdoor-detection-via-gram-matrices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-69-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-69-paper.pdf)
## RoVISQ: Reduction of Video Service Quality via Adversarial Attacks on Deep Learning-based Video Compression.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rovisq-reduction-of-video-service-quality-via-adversarial-attacks-on-deep-learning-based-video-compression) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rovisq-reduction-of-video-service-quality-via-adversarial-attacks-on-deep-learning-based-video-compression)**
### 作者
* Jung-Woo Chang, University of California San Diego
* Mojan Javaheripi, University of California San Diego
* Seira Hidano, KDDI Research
### 摘要
> 视频压缩在视频流传输和分类系统中扮演着重要角色，通过最大化给定带宽预算下终端用户体验（QoE）的质量。
> 
> 
> 
> 
> 
> 
> 
> 本文首次对基于深度学习的视频压缩和下游分类系统的对抗攻击进行了系统研究。我们的攻击框架名为RoVISQ，通过操纵视频压缩模型的速率失真（R-D）关系来实现以下目标之一或两者兼顾：（1）增加网络带宽，（2）降低对终端用户的视频质量。我们进一步设计了针对下游视频分类服务的有目标和无目标攻击的新目标。最后，我们设计了一种输入不变的扰动，实时干扰视频压缩和分类系统。与先前对视频分类提出的攻击不同，我们的对抗扰动是首次经受得住压缩过程。
> 
> 
> 
> 
> 
> 
> 
> 我们通过实验证明了RoVISQ攻击对各种防御方法的韧性，包括对抗训练、视频降噪和JPEG压缩。在各种视频数据集上的广泛实验结果显示，RoVISQ攻击使得峰值信噪比下降多达5.6dB，比特率增加了约2.4倍，同时在下游分类器上实现了超过90％的攻击成功率。我们的用户研究进一步证明了RoVISQ攻击对用户的QoE的影响。我们在https://sites.google.com/view/demo-of-rovisq/home上提供了用于我们调查的几个示例受攻击视频。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rovisq-reduction-of-video-service-quality-via-adversarial-attacks-on-deep-learning-based-video-compression/](https://www.ndss-symposium.org/ndss-paper/rovisq-reduction-of-video-service-quality-via-adversarial-attacks-on-deep-learning-based-video-compression/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-165-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-165-paper.pdf)
## Machine Unlearning of Features and Labels.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#machine-unlearning-of-features-and-labels) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#machine-unlearning-of-features-and-labels)**
### 作者
* Alexander Warnecke, TU Braunschweig
* Lukas Pirch, TU Braunschweig
* Christian Wressnegger, Karlsruhe Institute of Technology 
* Konrad Rieck, TU Braunschweig
### 摘要
> 从机器学习模型中删除信息是一项非常复杂的任务，它需要部分逆转训练过程。当敏感数据（如信用卡号或密码）意外进入模型并需要删除时，这个任务是不可避免的。最近，为了解决这个问题，提出了不同的机器遗忘概念。虽然这些方法对于删除单个数据点非常有效，但在需要还原较大组的特征和标签的场景中，它们无法扩展。在本文中，我们提出了第一种特征和标签遗忘的方法。我们的方法基于影响函数的概念，并通过闭式更新模型参数实现遗忘。它能够在学习模型中回溯性地调整训练数据的影响，从而纠正数据泄漏和隐私问题。对于具有强凸损失函数的学习模型，我们的方法提供了理论保证的可信遗忘。对于具有非凸损失函数的模型，我们通过实验证明，遗忘特征和标签是有效的，并且比其他策略更加快速。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/machine-unlearning-of-features-and-labels/](https://www.ndss-symposium.org/ndss-paper/machine-unlearning-of-features-and-labels/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-87-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-87-paper.pdf)
## Fusion: Efficient and Secure Inference Resilient to Malicious Servers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#fusion-efficient-and-secure-inference-resilient-to-malicious-servers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#fusion-efficient-and-secure-inference-resilient-to-malicious-servers)**
### 作者
* Caiqin Dong, Jinan University
* Jian Weng, Jinan University
* Jia-Nan Liu, Jinan University
* Yue Zhang, Jinan University
* Yao Tong, Guangzhou Fongwell Data Limited Company
* Anjia Yang, Jinan University
* Yudan Cheng, Jinan University
* Shun Hu, Jinan University
### 摘要
> 在安全机器学习推理中，大多数方案假设服务器是半诚实的（按照协议诚实行动，但试图推断额外信息）。然而，在现实世界中，服务器可能是恶意的（例如，使用低质量模型或偏离协议）。尽管一些研究考虑了偏离协议的恶意服务器，但它们忽略了模型准确性的验证（其中恶意服务器使用低质量模型），同时保护服务器模型和客户输入的隐私。为了解决这些问题，我们提出了textit{Fusion}，客户端将公共样本（具有已知查询结果的样本）与自己的样本混合，作为多方计算的输入，共同进行安全推理。由于使用低质量模型或偏离协议的服务器只能生成容易被客户端识别的结果，textit{Fusion}迫使服务器诚实行动，从而解决了所有上述问题，而无需依赖昂贵的加密技术。我们的评估结果表明，与现有的恶意安全推理协议相比（该协议目前不支持模型准确性的验证），textit{Fusion}速度提高了48.06倍，并且通信量减少了30.90倍。此外，为了展示可扩展性，我们在实用的ResNet50模型上进行了ImageNet规模的推理，其在广域网环境下耗时8.678分钟，通信量为10.117 GiB，比半诚实协议快1.18倍，通信量少2.64倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fusion-efficient-and-secure-inference-resilient-to-malicious-servers/](https://www.ndss-symposium.org/ndss-paper/fusion-efficient-and-secure-inference-resilient-to-malicious-servers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-199-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-199-paper.pdf)
## Trellis: Robust and Scalable Metadata-private Anonymous Broadcast.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#trellis-robust-and-scalable-metadata-private-anonymous-broadcast) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#trellis-robust-and-scalable-metadata-private-anonymous-broadcast)**
### 作者
* Simon Langowski, Massachusetts Institute of Technology
* Sacha Servan-Schreiber, Massachusetts Institute of Technology
* Srinivas Devadas, Massachusetts Institute of Technology
### 摘要
> Trellis是基于混合网络的具有加密安全保证的匿名广播系统。Trellis可以用于匿名发布文档或与其他用户通信，同时假设完全网络监视。在Trellis中，用户通过一系列服务器在连续的轮次中发送消息。服务器混合并将消息发布到公共公告板上，隐藏了哪些用户发送了哪些消息。
> 
> 
> 
> 
> 
> 
> 
> Trellis隐藏了所有网络级元数据，对于不断变化的网络条件保持强大，保证了对诚实用户的可用性，并且能够随着混合服务器数量的增加而扩展。与当前最先进的类似威胁模型的匿名广播系统Atom相比，Trellis在性能和网络稳健性方面提供了三至五个数量级的更快速度和更好的表现。为了实现这些保证，Trellis提供了：(1)为由一部分恶意服务器构建的路由混合网络提供了更简单的理论混合分析，(2)用于可验证随机路径的匿名路由令牌，和(3)基于洋葱路由构建的轻量级责任协议，用于识别和消除恶意参与者。
> 
> 
> 
> 
> 
> 
> 
> 我们在网络部署中实现和评估了Trellis。在覆盖四个地理区域的64个服务器上，Trellis实现了每秒220比特的吞吐量，具有10万用户。在128个服务器上，Trellis实现了每秒320比特的吞吐量。Trellis的吞吐量仅比Tor（拥有6,000个服务器和每日200万用户）慢100至1000倍，因此可在更小的“企业”规模上部署。我们的实现是开源的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/trellis-robust-and-scalable-metadata-private-anonymous-broadcast/](https://www.ndss-symposium.org/ndss-paper/trellis-robust-and-scalable-metadata-private-anonymous-broadcast/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-88-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-88-paper.pdf)
## On the Anonymity of Peer-To-Peer Network Anonymity Schemes Used by Cryptocurrencies.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#on-the-anonymity-of-peer-to-peer-network-anonymity-schemes-used-by-cryptocurrencies) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#on-the-anonymity-of-peer-to-peer-network-anonymity-schemes-used-by-cryptocurrencies)**
### 作者
* Piyush Kumar Sharma, imec-COSIC
### 摘要
> 加密货币系统可能会受到去匿名化攻击，利用对等网络的网络层通信。在对等网络中控制一组勾结节点的对手可以观察到正在交换的交易并推断出参与的各方。因此，提出了各种网络匿名方案来缓解这个问题，其中一些解决方案提供理论上的匿名保证。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们对这种对等网络匿名解决方案进行建模，并评估它们的匿名保证。为此，我们提出了一个使用贝叶斯推理来获取将交易链接到可能的发起者的概率分布的新框架。我们使用这些分布来表征交易的匿名性，使用信息熵作为对对手不确定性的度量来确定发起者的身份。我们特别对蒲公英(Dandelion)、蒲公英++(Dandelion++)和闪电网络(Lightning Network)进行建模。我们研究了不同的配置，并证明它们都无法为用户提供可接受的匿名性。例如，我们的分析显示，在广泛部署的闪电网络中，通过选择1%的勾结节点，对手可以对网络中总交易量的50％左右唯一确定发起者。在蒲公英中，控制15%的节点的对手平均只有8个可能的发起者的不确定性。此外，我们观察到由于蒲公英和蒲公英++的设计方式，增加网络规模并不意味着潜在发起者的匿名集合增加。令人担忧的是，我们对闪电网络的纵向分析表明，随着网络的增长，整体匿名性反而减少。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-the-anonymity-of-peer-to-peer-network-anonymity-schemes-used-by-cryptocurrencies/](https://www.ndss-symposium.org/ndss-paper/on-the-anonymity-of-peer-to-peer-network-anonymity-schemes-used-by-cryptocurrencies/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-241-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-241-paper.pdf)
## Thwarting Smartphone SMS Attacks at the Radio Interface Layer.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#thwarting-smartphone-sms-attacks-at-the-radio-interface-layer) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#thwarting-smartphone-sms-attacks-at-the-radio-interface-layer)**
### 作者
* Haohuang Wen, Ohio State University
* Phillip Porras, SRI International
* Vinod Yegneswaran, SRI International
* Zhiqiang Lin, Ohio State University
### 摘要
> 短消息服务（SMS）是现代智能手机通信的核心，使得人际文本消息和其他基于SMS的服务（例如双因素验证）成为可能。然而，它也可以轻易被利用来威胁到毫无疑虑的远程受害者。例如，Simjacker和WIBAttack等新型攻击可以传送二进制短信，可以在受害设备上秘密执行危险命令。SMS通道还可以被滥用以进行其他邪恶活动（如垃圾短信、拒绝服务攻击和追踪），从而削弱终端用户的安全和隐私。不幸的是，当代智能手机操作系统和现有的防御技术都无法全面抵御不断演变的SMS威胁。为了解决这一局限性，我们开发了一种名为RILDEFENDER的创新防御框架，据我们所知，这是首个集成到Android智能手机的无线接口层（RIL）的内联预防系统。我们在三款智能手机型号上实现了RILDEFENDER，并在五个Android开源项目（AOSP）的Android版本上进行了测试，结果显示它能够保护用户免受来自四种对手模型涵盖的六种类型的SMS攻击。我们对19个复制的SMS攻击和11个当代SMS恶意软件样本进行了RILDEFENDER评估，发现RILDEFENDER能够检测到并自动阻止所有除一种威胁外的所有威胁，而不影响正常的蜂窝网络操作。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/thwarting-smartphone-sms-attacks-at-the-radio-interface-layer/](https://www.ndss-symposium.org/ndss-paper/thwarting-smartphone-sms-attacks-at-the-radio-interface-layer/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-432-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-432-paper.pdf)
## InfoMasker: Preventing Eavesdropping Using Phoneme-Based Noise.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#infomasker-preventing-eavesdropping-using-phoneme-based-noise) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#infomasker-preventing-eavesdropping-using-phoneme-based-noise)**
### 作者
* Peng Huang, Zhejiang University
* Yao Wei, Zhejiang University
* Peng Cheng, Zhejiang University
* Zhongjie Ba, Zhejiang University
* Li Lu, Zhejiang University
* Feng Lin, Zhejiang University
* Fan Zhang, Zhejiang University
* Kui Ren, Zhejiang University
### 摘要
> 随着装有麦克风的智能设备的广泛部署，越来越多的用户担心自己的声音会被秘密录制。最近的研究表明，麦克风存在非线性，并且可以被无声超声波干扰，这导致了超声波反窃听研究的出现。然而，现有的解决方案通过能量掩蔽实现，需要很高的能量来干扰人的声音。由于超声噪音只能以有限的能量保持无声，这种噪音只能覆盖短距离，并且容易被对手移除，使得这些解决方案不实用。在本文中，我们探讨了信息掩蔽的思路，研究了超声波干扰的传输和覆盖约束，并实现了一个高效的反窃听系统，名为InfoMasker。具体而言，我们设计了一个基于音素的噪音，对去噪方法具有鲁棒性，并可以有效阻止人和机器理解被干扰的信号。我们优化了超声波传输方法，以实现更高的传输能量和更低的信号失真，并实现了我们系统的原型。实验结果表明，即使在低能量（SNR=0）下，InfoMasker可以将所有测试的语音识别系统的准确度有效降低到50%以下，比现有的噪音设计要好得多。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/infomasker-preventing-eavesdropping-using-phoneme-based-noise/](https://www.ndss-symposium.org/ndss-paper/infomasker-preventing-eavesdropping-using-phoneme-based-noise/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-457-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-457-paper.pdf)
## FUZZILLI: Fuzzing for JavaScript JIT Compiler Vulnerabilities.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#fuzzilli-fuzzing-for-javascript-jit-compiler-vulnerabilities) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#fuzzilli-fuzzing-for-javascript-jit-compiler-vulnerabilities)**
### 作者
* Samuel Groß, Google
* Simon Koch, TU Braunschweig
* Lukas Bernhard, Ruhr-University Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Martin Johns, TU Braunschweig
### 摘要
> JavaScript已成为互联网基础设施的重要组成部分，今天的交互式Web应用程序离不开这种编程语言。不过，这种交互性意味着Web应用程序依赖于越来越多的计算密集型JavaScript代码，这给负责高效执行代码的JavaScript引擎带来了负担。为了满足日益增长的性能需求，现代JavaScript引擎配备了复杂的即时编译器（JIT）。然而，JIT编译器是一项复杂的技术，因此对潜在故障提供了广泛的攻击面，有可能影响到安全。先前在JavaScript引擎中发现软件故障的研究工作发现了许多漏洞，通常使用模糊测试。不幸的是，这些模糊测试方法并不适用于生成实际触发JIT语义的源代码。因此，现有方法不太可能发现JIT漏洞。本文填补了这个空白，并提出了首个专注于JIT漏洞的模糊测试工具。具体而言，我们提出了一种中间表示（IR）的设计和实现，重点是发现JIT编译器的漏洞。我们实现了所提出方法的完整原型，并在六个月的时间里对我们的模糊测试工具进行了评估。总共，我们发现了17个经确认的安全漏洞。我们的结果表明，有针对性的JIT模糊测试是可行的，并且对JavaScript引擎的模糊测试覆盖范围存在一个严重被忽视的空白。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fuzzilli-fuzzing-for-javascript-jit-compiler-vulnerabilities/](https://www.ndss-symposium.org/ndss-paper/fuzzilli-fuzzing-for-javascript-jit-compiler-vulnerabilities/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-290-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-290-paper.pdf)
## No Grammar, No Problem: Towards Fuzzing the Linux Kernel without System-Call Descriptions.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#no-grammar-no-problem-towards-fuzzing-the-linux-kernel-without-system-call-descriptions) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#no-grammar-no-problem-towards-fuzzing-the-linux-kernel-without-system-call-descriptions)**
### 作者
* Alexander Bulekov, Boston University
* Bandan Das, Red Hat
* Stefan Hajnoczi, Red Hat
* Manuel Egele, Boston University
### 摘要
> 整个计算生态系统的完整性取决于操作系统（OS）的安全性。不幸的是，由于OS代码的规模和复杂性，每年都会发现数百个OS中的安全问题。因此，操作系统一直是应用安全分析工具的主要案例。近年来，模糊测试已成为自动发现软件安全问题的主导技术。因此，模糊测试已被适应于发现内核中的成千上万个错误。然而，现代操作系统模糊测试器（如Syzkaller）依赖于精确、广泛和手动创建的用于内核中每个接口进行模糊测试的测试用例和语法。由于对语法的依赖，当前的操作系统模糊测试器面临扩展性问题。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了FuzzNG，我们对操作系统系统调用模糊测试的通用方法。与Syzkaller不同，FuzzNG不需要详细描述系统调用接口以正常工作。相反，FuzzNG利用基本的内核设计特性来重新塑造和简化模糊测试器的输入空间。因此，FuzzNG只需要针对每个新目标的一个小型配置，基本上是一个列表，列出了模糊测试器应该探索的文件和系统调用号码。
> 
> 
> 
> 
> 
> 
> 
> 我们在Linux内核上实现了FuzzNG。在Syzkaller详细描述的10个Linux组件上测试FuzzNG表明，平均而言，FuzzNG达到了Syzkaller覆盖范围的102.5%。FuzzNG发现了9个新的漏洞（其中5个是Syzkaller已经进行了多年的广泛模糊测试的组件）。此外，FuzzNG的轻量级配置文件不到Syzkaller手动编写的语法文件大小的1.7%。关键是，FuzzNG在没有初始种子输入或专家指导的情况下实现了这一点。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/no-grammar-no-problem-towards-fuzzing-the-linux-kernel-without-system-call-descriptions/](https://www.ndss-symposium.org/ndss-paper/no-grammar-no-problem-towards-fuzzing-the-linux-kernel-without-system-call-descriptions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-688-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-688-paper.pdf)
## DARWIN: Survival of the Fittest Fuzzing Mutators.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#darwin-survival-of-the-fittest-fuzzing-mutators) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#darwin-survival-of-the-fittest-fuzzing-mutators)**
### 作者
* Patrick Jauernig, Technical University of Darmstadt
* Domagoj Jakobovic, University of Zagreb
### 摘要
> Fuzzing是一种被广泛采用的自动化软件测试技术。一种流行的变异模式fuzzing发现了大量实际中的漏洞。虽然研究界多年来一直在研究变异模式fuzzing，但fuzzer内的算法相互作用非常复杂，而且随机性可能导致不可预测的效果。大多数改进这种脆弱交互的努力都集中在优化种子调度上。然而，类似Google的FuzzBench这样的真实结果表明，这些方法在实践中并不一致地显示改进。另一种改进模糊测试过程算法的方法是优化变异调度。不幸的是，现有的变异调度方法也没有通过缺乏真实世界的改进或太多需要专业知识关于目标程序的用户可控参数的配置而使人信服。这使得巧妙处理测试案例并实现明显改进的问题仍然没有解决。我们提出了DARWIN，一种新颖的变异调度器，首次在现实场景中显示出模糊测试的改进效果，并无需引入额外的用户可配置参数，将这种方法开放给广大的模糊测试社区。DARWIN使用演化策略系统地优化和适应变异运算符的概率分布，在模糊测试期间进行。我们基于流行的通用fuzzer AFL实现了一个原型。在我们自己的覆盖实验、FuzzBench和MAGMA基准测试中，DARWIN在寻找漏洞速度上明显优于最先进的变异调度器和AFL基准。最后，在广泛使用的实际应用程序中，DARWIN发现了20个独特的漏洞（包括一个新颖的漏洞），比AFL多发现了66%的漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/darwin-survival-of-the-fittest-fuzzing-mutators/](https://www.ndss-symposium.org/ndss-paper/darwin-survival-of-the-fittest-fuzzing-mutators/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-159-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-159-paper.pdf)
## LOKI: State-Aware Fuzzing Framework for the Implementation of Blockchain Consensus Protocols.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#loki-state-aware-fuzzing-framework-for-the-implementation-of-blockchain-consensus-protocols) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#loki-state-aware-fuzzing-framework-for-the-implementation-of-blockchain-consensus-protocols)**
### 作者
* Fuchen Ma, Tsinghua University
* Yuanliang Chen, Tsinghua University
* Meng Ren, Tsinghua University
* Yuanhang Zhou, Tsinghua University
* Yu Jiang, Tsinghua University
* Ting Chen, University of Electronic Science and Technology of China
* Huizhong Li, WeBank
* Jiaguang Sun, School of Software
### 摘要
> 区块链共识协议负责协调节点就交易结果达成一致。它们的实现漏洞，包括与内存相关的漏洞和共识逻辑漏洞，可能构成严重威胁。模糊测试是一种用于检测协议漏洞的有希望的技术。然而，现有的模糊测试工具无法处理分布式节点的复杂共识状态，因此产生大量无用数据包，限制了它们在达到共识协议深层逻辑方面的效果。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了一种名为LOKI的区块链共识协议模糊测试框架，用于检测共识内存相关和逻辑漏洞。LOKI通过伪装成一个节点实时感应共识状态。首先，LOKI动态构建状态模型，记录每个节点的状态转换。然后，LOKI根据状态模型自适应生成输入目标、类型和内容。通过使用一个漏洞分析器，LOKI通过定义良好的消息确认检测共识协议的实现漏洞。我们在四个广泛使用的商业区块链系统上实施并评估了LOKI，包括Go-Ethereum，Facebook Diem，IBM Fabric和WeBank FISCO-BCOS。LOKI已经检测到20个严重的以前未知的漏洞，其中有9个CVE编号，其中14个是与内存相关的漏洞，6个是共识逻辑漏洞。与Peach，Fluffy和Twins等最先进的工具相比，LOKI的分支覆盖率平均提高了43.21％，182.05％和291.58％。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/loki-state-aware-fuzzing-framework-for-the-implementation-of-blockchain-consensus-protocols/](https://www.ndss-symposium.org/ndss-paper/loki-state-aware-fuzzing-framework-for-the-implementation-of-blockchain-consensus-protocols/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-78-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-78-paper.pdf)
## Securing Federated Sensitive Topic Classification against Poisoning Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#securing-federated-sensitive-topic-classification-against-poisoning-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#securing-federated-sensitive-topic-classification-against-poisoning-attacks)**
### 作者
* Tianyue Chu, IMDEA Networks Institute
* Alvaro Garcia-Recuero, IMDEA Networks Institute
* Costas Iordanou, Cyprus University of Technology
* Georgios Smaragdakis, TU Delft
* Nikolaos Laoutaris, IMDEA Networks Institute
### 摘要
> 我们提出了基于联邦学习（FL）的解决方案，用于构建一个分布式分类器，能够检测包含敏感内容的URL，即与健康、政治信仰、性取向等类别相关的内容。虽然这样一个分类器解决了之前离线/集中式分类器的局限性，但仍然容易受到恶意用户的攻击，他们可能试图通过传播错误的模型更新来降低对良性用户的准确性。为了防范这种攻击，我们开发了一种基于主观逻辑和基于残差的攻击检测的强大聚合方案。通过结合理论分析、基于轨迹的仿真以及通过原型和真实用户进行实验验证，我们展示了我们的分类器能够以高准确度检测敏感内容、快速学习新标签，并且在面对恶意用户的毒化攻击以及非恶意用户的不完美输入时保持稳健。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/securing-federated-sensitive-topic-classification-against-poisoning-attacks/](https://www.ndss-symposium.org/ndss-paper/securing-federated-sensitive-topic-classification-against-poisoning-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-112-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-112-paper.pdf)
## OBSan: An Out-Of-Bound Sanitizer to Harden DNN Executables.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#obsan-an-out-of-bound-sanitizer-to-harden-dnn-executables) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#obsan-an-out-of-bound-sanitizer-to-harden-dnn-executables)**
### 作者
* Yanzuo Chen, The Hong Kong University of Science and Technology
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
### 摘要
> 深度神经网络(DNN)模型在各种硬件平台上的快速采用推动了深度学习(DL)编译器的发展。DL编译器以高级DNN模型规格作为输入，为诸如CPU和GPU等不同硬件架构生成优化的DNN可执行文件。尽管DL编译器在现实场景中的应用逐渐增多，但目前还没有解决方案能够保护DNN可执行文件。为了填补这一关键差距，本文介绍了OBSAN，一种快速的消毒剂，用于检查DNN可执行文件的越界(out-of-bound, OOB)行为。从整体的观点来看，DNN包含双向计算：前向传播根据输入预测输出，反向传播描述了如何进行前向预测。在前向传播中，神经元激活值和在后向传播中的梯度都应该落在有效范围内，而偏离有效范围会被视为越界。
> 
> 
> 
> 
> 
> 
> 
> OOB主要与DNN的不安全行为相关，这些行为起源于异常输入，可能导致误预测甚至通过对抗性示例(Adversarial Examples, AEs)进行利用。因此，我们设计了包括FOBSAN和BOBSAN两种变体的OBSAN，分别用于检测前向和后向传播中的OOB。每个OBSAN都被设计为DL编译器的额外步骤，以与大规模DNN模型集成，我们还设计了各种优化方案来降低OBSAN的开销。对各种异常输入的评估显示，OBSAN在低开销下表现出有希望的OOB可检测性。我们进一步提出了两个下游应用来展示OBSAN如何防止在线AE生成，并促进以DNN可执行文件为目标的反馈驱动的模糊测试。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/obsan-an-out-of-bound-sanitizer-to-harden-dnn-executables/](https://www.ndss-symposium.org/ndss-paper/obsan-an-out-of-bound-sanitizer-to-harden-dnn-executables/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-103-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-103-paper.pdf)
## BARS: Local Robustness Certification for Deep Learning based Traffic Analysis Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#bars-local-robustness-certification-for-deep-learning-based-traffic-analysis-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#bars-local-robustness-certification-for-deep-learning-based-traffic-analysis-systems)**
### 作者
* Kai Wang, Tsinghua University
* Zhiliang Wang, Tsinghua University
* Dongqi Han, Tsinghua University
* Wenqi Chen, Tsinghua University
* Jiahai Yang, Tsinghua University
* Xingang Shi, Tsinghua University
* Xia Yin, Tsinghua University
### 摘要
> 深度学习（DL）在许多交通分析任务中表现出色。然而，深度学习的脆弱性削弱了这些交通分析器在实际环境中的性能（例如，易遭受逃避攻击）。近年来的许多研究都专注于对基于DL的模型进行鲁棒性认证。但是现有方法在交通分析领域的表现远非完美。在本文中，我们尝试同时匹配DL-based交通分析系统的三个属性：（1）高度异构的特征，（2）多样的模型设计，（3）对抗性操作环境。因此，我们提出了BARS，一种基于边界自适应随机平滑的DL-based交通分析系统的通用鲁棒性认证框架。为了获得更紧密的鲁棒性保证，BARS使用优化的平滑噪声收敛于分类边界。我们首先提出了分布转换器来生成优化的平滑噪声。然后为了优化平滑噪声，我们还提出了一些特殊的分布函数和两个基于梯度的搜索算法来调整噪声形状和噪声规模。我们在三个实际的基于DL的交通分析系统中实施和评估了BARS。实验结果表明，BARS可以实现比基准方法更紧密的鲁棒性保证。此外，我们通过五个应用案例（例如，定量评估鲁棒性）说明了BARS的实用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bars-local-robustness-certification-for-deep-learning-based-traffic-analysis-systems/](https://www.ndss-symposium.org/ndss-paper/bars-local-robustness-certification-for-deep-learning-based-traffic-analysis-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-508-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-508-paper.pdf)
## Anomaly Detection in the Open World: Normality Shift Detection, Explanation, and Adaptation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#anomaly-detection-in-the-open-world-normality-shift-detection-explanation-and-adaptation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#anomaly-detection-in-the-open-world-normality-shift-detection-explanation-and-adaptation)**
### 作者
* Dongqi Han, Tsinghua University
* Zhiliang Wang, Tsinghua University
* Wenqi Chen, Tsinghua University
* Kai Wang, Tsinghua University
* Rui Yu, Tsinghua University
* Su Wang, Tsinghua University
* Han Zhang, Tsinghua University
* Zhihua Wang, State Grid Shanghai Municipal Electric Power Company
* Minghui Jin, State Grid Shanghai Municipal Electric Power Company
* Jiahai Yang, Tsinghua University
* Xingang Shi, Tsinghua University
* Xia Yin, Tsinghua University
### 摘要
> 概念漂移是基于封闭世界假设的学习型安全应用中最令人沮丧的挑战之一，该假设认为训练和部署之间的分布是相同的。异常检测是安全领域中最重要的任务之一，由于训练过程中没有异常数据（称为零阳性），因此异常检测对异常行为的漂移是免疫的，但这也带来了当正常性发生变化时更严重的影响。然而，现有研究主要关注异常行为的概念漂移和/或监督学习，对于零阳性异常检测的正常性变化研究还相对较少。
> 
> 
> 
> 
> 
> 
> 
> 在本研究中，我们首次探索了深度学习在安全应用中的异常检测中的正常性变化，并提出了OWAD，一种通用框架来检测、解释和适应实践中的正常性变化。特别是，OWAD通过无监督方式检测漂移，减少了手动标记的开销，并通过面向分布级别的处理提供更好的适应性能。通过在三个安全相关的异常检测应用上进行多个真实实验，我们证明了OWAD的有效性。结果显示，OWAD可以提供更好的正常性变化的适应性能，并减少标记的开销。我们提供了案例研究来分析正常性变化，并为安全应用提供操作建议。我们还对一个SCADA安全系统进行了初步的实际部署。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/anomaly-detection-in-the-open-world-normality-shift-detection-explanation-and-adaptation/](https://www.ndss-symposium.org/ndss-paper/anomaly-detection-in-the-open-world-normality-shift-detection-explanation-and-adaptation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-830-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-830-paper.pdf)
## Ghost Domain Reloaded: Vulnerable Links in Domain Name Delegation and Revocation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#ghost-domain-reloaded-vulnerable-links-in-domain-name-delegation-and-revocation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#ghost-domain-reloaded-vulnerable-links-in-domain-name-delegation-and-revocation)**
### 作者
* Xiang Li, Tsinghua University
* Baojun Liu, Tsinghua University
* Xuesong Bai, University of California
### 摘要
> 在这篇论文中，我们提出了一种名为“凤凰域”的攻击方法，它是一种通用且新颖的攻击方式，可以使对手在大规模上保持已撤销的恶意域名可解析，从而启用已经被缓解的攻击方式“幽灵域名”。凤凰域有两种变体，对所有主流DNS软件和公共DNS解析器产生影响，因为它不违反任何DNS规范和最佳安全实践。该攻击是通过系统化地“逆向工程”8个DNS实现的缓存操作实现的，并在域名委托过程中揭示了新的攻击面。我们选择了41个知名的公共DNS解析器，并证明了所有受调查的DNS服务都容易受到凤凰域的攻击，包括谷歌公共DNS和Cloudflare DNS。我们对210,000个稳定且分布式的DNS递归解析器进行了广泛的测量研究，结果显示，即使在域名被撤销和缓存过期一个月之后，仍有超过25%的递归解析器可以继续解析该域名。这种攻击为对手提供了规避恶意域名下线安全实践的机会。我们已经向所有受影响的供应商报告了发现的漏洞，并向他们提出了6种缓解方法。截至目前，有7个DNS软件提供商和15个解析器供应商，包括BIND、Unbound、谷歌和Cloudflare，都确认了这些漏洞，并根据我们的建议进行了实施和发布缓解补丁。此外，已经分配了9个CVE编号。该研究呼吁标准化以解决如何安全撤销域名并维护缓存一致性的问题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ghost-domain-reloaded-vulnerable-links-in-domain-name-delegation-and-revocation/](https://www.ndss-symposium.org/ndss-paper/ghost-domain-reloaded-vulnerable-links-in-domain-name-delegation-and-revocation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-5-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-5-paper.pdf)
## QUICforge: Client-side Request Forgery in QUIC.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#quicforge-client-side-request-forgery-in-quic) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#quicforge-client-side-request-forgery-in-quic)**
### 作者
* Yuri Gbur, Technische Universität Berlin
* Florian Tschorsch, Technische Universität Berlin
### 摘要
> QUIC协议通过最近的标准化和各大科技公司的日益兴趣，正在获得越来越多的关注，并且正在开发新的实现。QUIC承诺将安全性和隐私作为重中之重，然而对这些声明进行挑战是至关重要的。为此，本文提供了对直接由QUIC协议设计而非常见漏洞引发的客户端伪造请求攻击的初步分析。具体而言，我们研究了三种请求伪造攻击模式，以了解它们在协议冒充和流量放大方面的能力。我们分析了各自协议消息的可控攻击空间，并证明其中一种攻击模式确实可以用于冒充其他基于UDP的协议，例如DNS请求。此外，我们还发现了流量放大的方法。尽管QUIC协议规范中规定了反放大限制，但我们对13个QUIC服务器实现进行的评估显示，在某些情况下这些缓解措施缺失或实现不充分。最后，我们提出了协议冒充的缓解方法，并讨论了规范中的不明确之处。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/quicforge-client-side-request-forgery-in-quic/](https://www.ndss-symposium.org/ndss-paper/quicforge-client-side-request-forgery-in-quic/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-72-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-72-paper.pdf)
## Automata-Based Automated Detection of State Machine Bugs in Protocol Implementations.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#automata-based-automated-detection-of-state-machine-bugs-in-protocol-implementations) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#automata-based-automated-detection-of-state-machine-bugs-in-protocol-implementations)**
### 作者
* Paul Fiterau-Brostean, Uppsala University
### 摘要
> 实现有状态安全协议必须仔细处理交换消息和加密材料的类型和顺序，通过维护一个状态机来跟踪协议进展。相应的实现缺陷，称为强调{状态机错误}，可能构成严重的安全漏洞。我们提出了一种用于检测有状态网络协议实现中状态机错误的自动化黑盒技术。它将协议的状态机错误目录作为输入，每个目录都被指定为接受展示错误的消息序列的有限自动机，以及（可能不准确的）待测试实现的模型，通常通过模型学习获得。我们的技术构建了（根据模型）可以由实现执行并（根据自动机）暴露错误的序列集合。然后，将这些序列转换为实际实现上的测试用例，以找到错误的证明或过滤出虚警。我们已经应用我们的技术在三个广泛使用的SSH服务器实现和九个不同的DTLS服务器和客户端实现上，包括它们最新的版本。我们的技术轻松复现了以前安全研究人员发现的所有错误，并为它们提供了证据。更重要的是，它揭示了同一SSH和DTLS实现的新版本中的几个以前未知的错误，两个新漏洞以及各种新的错误和不一致问题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automata-based-automated-detection-of-state-machine-bugs-in-protocol-implementations/](https://www.ndss-symposium.org/ndss-paper/automata-based-automated-detection-of-state-machine-bugs-in-protocol-implementations/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-68-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-68-paper.pdf)
## I Still Know What You Watched Last Sunday: Privacy of the HbbTV Protocol in the European Smart TV Landscape.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#i-still-know-what-you-watched-last-sunday-privacy-of-the-hbbtv-protocol-in-the-european-smart-tv-landscape) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#i-still-know-what-you-watched-last-sunday-privacy-of-the-hbbtv-protocol-in-the-european-smart-tv-landscape)**
### 作者
* Carlotta Tagliaro, TU Wien
* Florian Hahn, University of Twente
* Riccardo Sepe, Guess Europe Sagl
* Alessio Aceti, Sababa Security SpA
* Martina Lindorfer, TU Wien
### 摘要
> 随着智能电视的日益普及和对混合广播宽带电视（HbbTV）标准的支持，广播公司可以通过标准广播信号与互联网应用程序相结合，为用户提供更丰富的内容，例如电视节目中的问答游戏和定向广告。HbbTV使用标准网络技术作为电视频道的透明叠加层。尽管支持HbbTV的设备数量正在迅速增长，但对于该协议的安全性和隐私方面的研究仍然很少，也没有标准的保护措施。
> 
> 
> 
> 
> 
> 
> 
> 我们通过调查欧洲地区HbbTV的现状并评估其对用户隐私的影响来填补这一空白。我们将重点从已经在相关工作中深入研究过的智能电视固件和应用程序安全性转移到内容传输协议本身。与传统的“线性电视”信号不同，HbbTV允许双向通信：除了接收电视内容外，它还允许向广播公司发送数据。我们描述了广播公司用于测量用户（收视）偏好的技术，并通过研究其在意大利、德国、法国、奥地利和芬兰五个欧洲国家的36个电视频道的部署，展示了协议的实施可能导致严重的隐私风险。我们还调查了用户对智能电视和HbbTV相关风险的意识。我们的结果显示，用户对可能面临的威胁了解甚少。最后，我们提出了基于拒绝列表的机制，以确保用户在观看电视时获得安全体验，并减少HbbTV可能带来的隐私问题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/i-still-know-what-you-watched-last-sunday-privacy-of-the-hbbtv-protocol-in-the-european-smart-tv-landscape/](https://www.ndss-symposium.org/ndss-paper/i-still-know-what-you-watched-last-sunday-privacy-of-the-hbbtv-protocol-in-the-european-smart-tv-landscape/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f102_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f102_paper.pdf)
## Your Router is My Prober: Measuring IPv6 Networks via ICMP Rate Limiting Side Channels.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#your-router-is-my-prober-measuring-ipv6-networks-via-icmp-rate-limiting-side-channels) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#your-router-is-my-prober-measuring-ipv6-networks-via-icmp-rate-limiting-side-channels)**
### 作者
* Long Pan, Tsinghua University
* Jiahai Yang, Tsinghua University
* Lin He, Tsinghua University
* Zhiliang Wang, Tsinghua University
* Leyao Nie, Tsinghua University
* Guanglei Song, Tsinghua University
* Yaozhong Liu, Tsinghua University
### 摘要
> 主动的互联网测量在一些需要多个远程视角的测量时面临挑战。在本文中，我们提出了一种通过 ICMP 速率限制的副通道来测量远程 IPv6 网络的新技术。这是 IPv6 节点用来限制 ICMP 错误消息生成速率的必需功能。这种技术，即 *iVantage*，在某种程度上可以使用分布在9,500个自治系统和182个国家的1.1百万个远程路由器作为我们的“视角”。我们将 *iVantage* 应用于两个不同但具有挑战性的测量任务：1）测量入站源地址验证（ISAV）的部署情况，以及2）测量任意互联网节点之间的可达性。我们只从一个本地视角完成了这两个任务，而无需控制目标或依赖于目标网络中的其他服务。我们的大规模 ISAV 测量涵盖了大约 50% 的 IPv6 自治系统，并发现其中约 79% 可受到欺骗攻击，这是迄今为止最大规模的 IPv6 ISAV 测量研究。我们的可达性测量方法在评估中实现了超过80%的准确度和召回率。最后，我们对 ICMP 速率限制实施进行了整个互联网范围的测量，并对 ICMP 速率限制进行了详细讨论，特别是在 ICMP 速率限制机制中存在的潜在安全和隐私风险，并提供了可能的缓解措施。我们将我们的代码提供给社区使用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/your-router-is-my-prober-measuring-ipv6-networks-via-icmp-rate-limiting-side-channels/](https://www.ndss-symposium.org/ndss-paper/your-router-is-my-prober-measuring-ipv6-networks-via-icmp-rate-limiting-side-channels/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-49-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-49-paper.pdf)
## POSE: Practical Off-chain Smart Contract Execution.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#pose-practical-off-chain-smart-contract-execution) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#pose-practical-off-chain-smart-contract-execution)**
### 作者
* Tommaso Frassetto, Technical University of Darmstadt
* Patrick Jauernig, Technical University of Darmstadt
* David Koisser, Technical University of Darmstadt
* David Kretzler, Technical University of Darmstadt
* Benjamin Schlosser, Technical University of Darmstadt
* Sebastian Faust, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 智能合约使用户能够根据复杂的程序逻辑执行支付。以太坊是支持智能合约的区块链的最显著例子，用于各种应用，包括游戏、拍卖和金融产品。不幸的是，传统的在链上运行合约代码的方法非常昂贵，例如，在以太坊平台上，费用大幅增加，使系统无法适用于复杂的应用。解决这个问题的一个重要方法是在链外执行代码，并将区块链作为信任锚点。尽管在过去几年中在开发链外系统方面取得了重大进展，但当前的链外解决方案存在各种缺点，包括昂贵的区块链交互、缺乏数据隐私、锁定抵押品造成的巨大资金成本，或仅支持一组受限的应用。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了POSE——一种实用的智能合约链外协议，解决了现有解决方案的上述缺点。POSE利用一组可信执行环境（TEE）高效执行计算，并迅速从意外或恶意故障中恢复。我们证明了即使大部分参与方被破坏，POSE提供了强大的安全保证。我们评估了我们的概念验证实现的效率和效果。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pose-practical-off-chain-smart-contract-execution/](https://www.ndss-symposium.org/ndss-paper/pose-practical-off-chain-smart-contract-execution/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-118-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-118-paper.pdf)
## OptRand: Optimistically Responsive Reconfigurable Distributed Randomness.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#optrand-optimistically-responsive-reconfigurable-distributed-randomness) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#optrand-optimistically-responsive-reconfigurable-distributed-randomness)**
### 作者
* Adithya Bhat, Purdue University
* Nibesh Shrestha, Rochester Institute of Technology
* Aniket Kate, Purdue University
* Kartik Nayak, Duke University
### 摘要
> 公共随机信标会按照规律发布随机数，任何人都可以获得并进行验证。公共分布式随机信标的设计一直是一个令人兴奋的研究方向，对区块链、投票等领域具有重大的影响。除了抗偏差和不可预测之外，分布式随机信标还需要具有低通信开销和延迟、对故障具有高韧性、易于重新配置等特点。现有的同步随机信标协议牺牲了其中一个或多个这些特性。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们设计了一种高效的、不可预测的同步随机信标协议OptRand，每个信标输出的通信复杂度为系统节点数量$n$的平方。首先，我们创新地采用双线性配对技术的公开可验证的秘密共享和非交互式零知识证明的新组合，构建了一个线性大小的公开可验证随机共享。其次，我们开发了一个具有线性大小输入的状态机复制协议，该协议在乐观情况下能够以实际网络速度进行响应，尽管存在同步假设，从而导致低延迟。此外，我们还提出了一种高效的OptRand重新配置机制，允许节点离开和加入系统。我们的实验证明，在乐观情况下，我们的协议与业界领先的协议相比具有显著的性能优势，并且在正常情况下与业界领先的协议相当。我们还是第一个实现分布式信标重新配置机制的团队，并且证明我们的协议在重新配置期间仍然保持活跃。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/optrand-optimistically-responsive-reconfigurable-distributed-randomness/](https://www.ndss-symposium.org/ndss-paper/optrand-optimistically-responsive-reconfigurable-distributed-randomness/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-832-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-832-paper.pdf)
## Partitioning Ethereum without Eclipsing It.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#partitioning-ethereum-without-eclipsing-it) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#partitioning-ethereum-without-eclipsing-it)**
### 作者
* Hwanjo Heo, ETRI
* Seungwon Woo, ETRI/KAIST
* Taeung Yoon, KAIST
* Min Suk Kang, KAIST
* Seungwon Shin, KAIST
### 摘要
> 我们提出了一种实用的分区攻击，称为Gethlighting，可以将Ethereum全节点与网络的其余部分隔离数小时，而无需占用（或遮挡）目标节点的所有对等连接。在Gethlighting中，对手只控制目标节点的大约一半（例如，总共50个中的25个）的所有对等连接，以操作几个廉价虚拟机实现小攻击预算的强大分区攻击。在Gethlighting的核心，其低速拒绝服务（DoS）策略有效地阻止了本地区块链的增长数小时，同时不影响其他Ethereum节点的操作。我们分析了低速DoS引起的微妙和微不足道的延迟如何导致强大的区块链分区攻击。讨论了Gethlighting的实际影响，即攻击具有可扩展性和低成本（仅约为5714美元，可同时针对所有Ethereum全节点攻击24小时），且发起非常简单。我们通过控制实验和真实世界实验中的Ethereum主网和测试网中的全节点，展示了Gethlighting的可行性。我们确定了Ethereum中的一些基本系统特征，这些特征使得Gethlighting攻击成为可能，并提出了需要一些协议和客户端实现改进的对策。Ethereum基金会已于2022年9月承认了这个漏洞，并接受了我们的一个对策作为Geth 1.11.0的补丁。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/partitioning-ethereum-without-eclipsing-it/](https://www.ndss-symposium.org/ndss-paper/partitioning-ethereum-without-eclipsing-it/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-465-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-465-paper.pdf)
## Smarter Contracts: Detecting Vulnerabilities in Smart Contracts with Deep Transfer Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#smarter-contracts-detecting-vulnerabilities-in-smart-contracts-with-deep-transfer-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#smarter-contracts-detecting-vulnerabilities-in-smart-contracts-with-deep-transfer-learning)**
### 作者
* Christoph Sendner, University of Wuerzburg
* Huili Chen, University of California San Diego
* Hossein Fereidooni, Technische Universität Darmstadt
* Lukas Petzi, University of Wuerzburg
* Jan König, University of Wuerzburg
* Jasper Stang, University of Wuerzburg
* Alexandra Dmitrienko, University of Wuerzburg
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
* Farinaz Koushanfar, University of California San Diego
### 摘要
> 以太坊智能合约是区块链上自动化的去中心化应用程序，用于描述买卖双方的协议条款，减少了对可信中介和仲裁的需求。然而，智能合约的部署将新的攻击向量引入了加密货币系统。特别是，智能合约中的编程缺陷已经被利用，导致了巨大的经济损失。因此，有效和高效地检测合约中的各种漏洞类型非常重要。现有的漏洞检测方法在范围上存在限制，通常只关注一种或非常有限的漏洞类型。而且，将它们扩展到新的漏洞类型需要昂贵的重新设计。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们开发了一种基于深度学习的漏洞检测方法ESCORT，它使用通用特征提取器来学习智能合约的字节码语义，并使用不同分支来学习每种漏洞类型的特征。作为一个多标签分类器，ESCORT可以同时检测合约的多个漏洞。与之前的检测方法相比，ESCORT可以通过迁移学习轻松扩展到新的漏洞类型，只需有限的数据。当出现新的漏洞类型时，ESCORT会向已经训练好的特征提取器添加一个新的分支，并用有限的数据进行训练。我们在一个包含361万个智能合约的数据集上评估了ESCORT，在初始训练中，它在六种漏洞类型上实现了平均F1得分达到98％，在迁移学习阶段，在五种额外的漏洞类型上实现了平均F1得分96％。据我们所知，ESCORT是第一个基于深度学习的框架，它利用迁移学习在新的漏洞类型上进行最小的模型修改和重新训练。与现有的非机器学习工具相比，ESCORT可以应用于任意复杂度的合约，并确保100％的合约覆盖率。此外，我们使用一个统一的框架实现了多个漏洞类型的并发检测，避免了使用多个工具的努力，并大大减少了检测时间。我们将开源我们的数据集和数据标注工具链，以促进未来的研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/smarter-contracts-detecting-vulnerabilities-in-smart-contracts-with-deep-transfer-learning/](https://www.ndss-symposium.org/ndss-paper/smarter-contracts-detecting-vulnerabilities-in-smart-contracts-with-deep-transfer-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-263-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-263-paper.pdf)
## Real Threshold ECDSA.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#real-threshold-ecdsa) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#real-threshold-ecdsa)**
### 作者
* Harry W. H. Wong, The Chinese University of Hong Kong
* Jack P. K. Ma, The Chinese University of Hong Kong
* Hoover H. F. Yin, The Chinese University of Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong
### 摘要
> 阈值ECDSA 最近因为去中心化应用诸如DNSSEC和加密货币资产保管而重新流行起来。最新的（通信优化）方案通常假设所有n个或至少n' >= t个参与用户在预签名阶段始终保持诚实，实质上将退化为n'-out-of-n'的多方签名，而不是t-out-of-n的阈值签名。当有人行为不端时，所有签名者必须重新开始，使之前的计算和通信变得徒劳。这阻碍了阈值ECDSA在时间关键情况下的采用，并将其使用限制在一个小的签名委员会中。
> 
> 
> 
> 
> 
> 
> 
> 为了减轻现有技术中普遍存在的拒绝服务漏洞，我们提出了一种强大的阈值ECDSA方案，它在整个预签名和签名阶段实现了“真正”的t-out-of-n阈值灵活性，而不需要假设有一个诚实的多数。我们的方案适用于计算资源稀缺和容易引发故障的去中心化环境。我们的设计具有4轮预签名、O(n)作弊识别和自愈机制，通过分布式份额来实现。之前的研究要求在O(n^2)成本的识别后中止，尽管有3轮预签名（Canetti等人，CCS '20），或使用6轮的O(n)（Castagnos等人，TCS '23）。从实证上看，我们的方案可以节省高达约30%的通信成本，具体取决于故障发生的阶段。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/real-threshold-ecdsa/](https://www.ndss-symposium.org/ndss-paper/real-threshold-ecdsa/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-817-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-817-paper.pdf)
## Post-GDPR Threat Hunting on Android Phones: Dissecting OS-level Safeguards of User-unresettable Identifiers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#post-gdpr-threat-hunting-on-android-phones-dissecting-os-level-safeguards-of-user-unresettable-identifiers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#post-gdpr-threat-hunting-on-android-phones-dissecting-os-level-safeguards-of-user-unresettable-identifiers)**
### 作者
* Mark Huasong Meng, National University of Singapore
* Qing Zhang, ByteDance
* Guangshuai Xia, ByteDance
* Yuwei Zheng, ByteDance
* Yanjun Zhang, The University of Queensland
* Guangdong Bai, The University of Queensland
* Zhi Liu, ByteDance
* Sin G. Teo, Agency for Science
### 摘要
> 自从Android诞生以来，它就使应用能够访问移动设备上的数据和服务。然而，这涉及到各种与设备永久相关联的用户无法重置的唯一标识符（UUI），例如MAC地址。鉴于其隐私敏感性，Android自第10版开始加强了对UUI访问政策，以应对世界各地日益严格的隐私保护法规。非系统应用程序被限制访问它们，并要求使用可重置的替代方案，如广告标识符。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们对包括Android开放源代码项目（AOSP）和原始设备制造商（OEM）手机在内的Android手机上的UUI保护措施效果进行了系统研究。为了方便我们的大规模研究，我们提出了一套分析技术，发现和评估UUI访问渠道。我们的方法采用了静态程序分析Android框架和操作系统镜像的法庭分析相结合的混合分析方法，以揭示访问渠道。然后，通过差分分析测试这些渠道，以识别任何攻击机会的弱点。我们对9个主要制造商的13部热门手机进行了漏洞评估，其中大部分都是畅销手机，并安装了最新的Android版本。我们的研究发现，UUI处理不当普遍存在，共发现了51个独特的漏洞（其中8个被列入CVE）。我们的工作揭示了Android手机中UUI保护的现状，补充了现有研究主要关注应用程序对UUI的收集行为。我们的发现应该引起手机制造商的警觉，并鼓励决策者进一步扩大以设备级数据保护为范围的法规。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/post-gdpr-threat-hunting-on-android-phones-dissecting-os-level-safeguards-of-user-unresettable-identifiers/](https://www.ndss-symposium.org/ndss-paper/post-gdpr-threat-hunting-on-android-phones-dissecting-os-level-safeguards-of-user-unresettable-identifiers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-176-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-176-paper.pdf)
## MyTEE: Own the Trusted Execution Environment on Embedded Devices.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#mytee-own-the-trusted-execution-environment-on-embedded-devices) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#mytee-own-the-trusted-execution-environment-on-embedded-devices)**
### 作者
* Seungkyun Han, Chungnam National University
* Jinsoo Jang, Chungnam National University
### 摘要
> 我们提出了一种解决方案MyTEE，可以在最坏情况下构建可信执行环境(TEE)，即使缺少主要的硬件安全原语(例如，用于内存访问控制的ARM TrustZone扩展)。构建内存隔离的页面表、过滤DMA数据包和启用安全IO是MyTEE的核心。特别是对于安全IO，我们保护控制器的IO缓冲区和内存映射寄存器，并安全提升设备驱动程序的部分代码块的特权，以提供对受保护对象的访问权限。通过这样做，可以免除将设备驱动程序全部或部分托管在TEE中(这可能引入新的攻击面)的需要。我们在不支持绝大部分重要安全原语的树莓派3板上实现了MyTEE的概念验证。此外，我们还展示了使用硬件TPM、帧缓冲和USB键盘的三个安全IO示例，以展示我们方法的可行性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mytee-own-the-trusted-execution-environment-on-embedded-devices/](https://www.ndss-symposium.org/ndss-paper/mytee-own-the-trusted-execution-environment-on-embedded-devices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-41-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-41-paper.pdf)
## StealthyIMU: Stealing Permission-protected Private Information From Smartphone Voice Assistant Using Zero-Permission Sensors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#stealthyimu-stealing-permission-protected-private-information-from-smartphone-voice-assistant-using-zero-permission-sensors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#stealthyimu-stealing-permission-protected-private-information-from-smartphone-voice-assistant-using-zero-permission-sensors)**
### 作者
* Ke Sun, University of California San Diego
* Chunyu Xia, University of California San Diego
* Songlin Xu, University of California San Diego
* Xinyu Zhang, University of California San Diego
### 摘要
> 语音用户界面(VUIs)正在成为不可或缺的模块，使人类用户能够与智能手机进行无需使用手进行交互。不幸的是，最近的研究揭示了一种侧信道，允许零权限运动传感器窃听来自共同位置智能手机扬声器的VUI语音。然而，这些威胁仅局限于泄漏一小组数字和热词。在本文中，我们提出了一种名为StealthyIMU的新威胁，它使用运动传感器从VUIs中窃取受权限保护的私人信息。我们开发了一组高效的模型，以检测和提取私人信息，利用VUI响应中的确定性结构。我们的实验表明，StealthyIMU可以高精度地从23种常用语音命令中窃取私人信息，包括获取联系人、搜索历史、日历、家庭地址，甚至GPS轨迹。我们进一步提出了有效的机制来防御StealthyIMU，而不会对用户体验产生明显影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/stealthyimu-stealing-permission-protected-private-information-from-smartphone-voice-assistant-using-zero-permission-sensors/](https://www.ndss-symposium.org/ndss-paper/stealthyimu-stealing-permission-protected-private-information-from-smartphone-voice-assistant-using-zero-permission-sensors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-77-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-77-paper.pdf)
## AuthentiSense: A Scalable Behavioral Biometrics Authentication Scheme using Few-Shot Learning for Mobile Platforms.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#authentisense-a-scalable-behavioral-biometrics-authentication-scheme-using-few-shot-learning-for-mobile-platforms) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#authentisense-a-scalable-behavioral-biometrics-authentication-scheme-using-few-shot-learning-for-mobile-platforms)**
### 作者
* Hossein Fereidooni, Technical University of Darmstadt
* Jan Koenig, University of Wuerzburg
* Phillip Rieger, Technical University of Darmstadt
* Marco Chilese, Technical University of Darmstadt
* Bora Goekbakan, KOBIL
### 摘要
> 移动应用程序广泛用于在线服务，共享大量个人数据。一次性身份验证技术如密码和生理特征生物识别（例如指纹、面部和虹膜）都有其优点，但也有一些缺点，因为它们可以被盗取或仿造，并且一旦解锁了设备，无法防止对底层设备的访问。为了解决这些挑战，基于行为生物特征的辅助身份验证系统应运而生。其目标是根据用户与移动设备的互动不断地对用户进行分析。然而，现有的行为认证方案既不是用户不可知的，意味着它们不能动态地处理用户群的变化而不需要重新训练模型，也不是能够很好地应对百万用户的身份验证。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了AuthentiSense，这是一个用户不可知的、可扩展且高效的行为生物特征认证系统，它实现了连续认证，并利用用户与移动应用程序互动时的运动模式（即加速度计、陀螺仪和磁力计数据）。我们的方法既不需要手动设计特征，也不需要大量的数据进行模型训练。我们利用一种称为Siamese网络的几次学习技术来进行大规模用户认证。我们进行了系统的测量研究，并报告了在识别阶段交互时间对认证和n次验证（与注册样本的比较）的影响。值得注意的是，AuthentiSense在F1得分方面的准确度可达97％，即使在需要每个用户只提供少量行为样本（3次样本）的情况下进行评估。我们的方法仅需要用户与系统互动1秒钟即可准确地对用户进行认证。对于AuthentiSense，我们报告的FAR和FRR分别为0.023和0.057。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/authentisense-a-scalable-behavioral-biometrics-authentication-scheme-using-few-shot-learning-for-mobile-platforms/](https://www.ndss-symposium.org/ndss-paper/authentisense-a-scalable-behavioral-biometrics-authentication-scheme-using-few-shot-learning-for-mobile-platforms/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-194-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-194-paper.pdf)
## Do Not Give a Dog Bread Every Time He Wags His Tail: Stealing Passwords through Content Queries (CONQUER) Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#do-not-give-a-dog-bread-every-time-he-wags-his-tail-stealing-passwords-through-content-queries-conquer-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#do-not-give-a-dog-bread-every-time-he-wags-his-tail-stealing-passwords-through-content-queries-conquer-attacks)**
### 作者
* Chongqing Lei, Southeast University
* Zhen Ling, Southeast University
* Yue Zhang, Jinan University
* Kai Dong, Southeast University
* Kaizheng Liu, Southeast University
* Junzhou Luo, Southeast University
* Xinwen Fu, University of Massachusetts Lowell
### 摘要
> 安卓辅助功能服务旨在帮助残障人士使用安卓设备。然而，由于设计上的缺陷，它已经被攻击者利用来窃取用户密码。谷歌已经采取了各种措施，使得这类攻击在现代安卓设备上很难成功。在本文中，我们提出了一种新类型的侧信道攻击，称为内容查询（CONQUER），可以绕过这些防御措施。我们发现安卓没有阻止辅助功能服务查询密码内容，这使得启用了这个服务的恶意软件可以枚举密码组合以暴力破解密码。虽然这种攻击看似简单，但在成功对真实应用程序发起攻击之前，必须解决几个挑战。这些挑战包括使用懒查询来区分目标密码字符串，使用主动查询确定攻击的正确时机，以及使用基于时间和状态的侧信道来推断大小写敏感的密码。我们的评估结果表明，CONQUER攻击能够成功窃取密码，平均一次成功率为64.91%。这种攻击还对安卓4.1至12版本的所有应用构成威胁，并且可用于攻击数以万计的应用。此外，我们分析了CONQUER攻击的根本原因，并讨论了几种缓解其潜在安全风险的对策。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/do-not-give-a-dog-bread-every-time-he-wags-his-tail-stealing-passwords-through-content-queries-conquer-attacks/](https://www.ndss-symposium.org/ndss-paper/do-not-give-a-dog-bread-every-time-he-wags-his-tail-stealing-passwords-through-content-queries-conquer-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f5_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f5_paper.pdf)
## RR: A Fault Model for Efficient TEE Replication.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rr-a-fault-model-for-efficient-tee-replication) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rr-a-fault-model-for-efficient-tee-replication)**
### 作者
* Baltasar Dinis, Instituto Superior Técnico 
* Peter Druschel, MPI-SWS
* Rodrigo Rodrigues, Instituto Superior Técnico 
### 摘要
> 可信执行环境（TEEs）确保了硬件中计算的机密性和完整性。根据TEEs的威胁模型，硬件保护计算免受大多数外部引起的故障行为，但无法防止崩溃。因此，在TEE内复制受信任代码时，应使用能够容忍崩溃故障的复制协议足够。然而，TEEs不能提供有效且通用的手段来确保外部永久状态的新鲜度。因此，在具有外部状态的TEE计算中，CFT复制不足够，因为当TEE重新启动时，该状态可能会被回滚到早期版本。此外，在这种情况下使用BFT协议过于保守，因为这些协议设计用于容忍任意行为，而不仅仅是重新启动时的回滚。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了用于复制TEEs的重启回滚（RR）故障模型，精确地捕捉了具有外部状态的TEEs可能的故障行为。然后，我们展示了现有的复制协议可以很容易地适应这个故障模型，并且只需进行一些小的改动，同时保持其原始性能。我们将两个广泛使用的崩溃容错协议（ABD读/写寄存器协议和Paxos一致性协议）适应了RR模型。此外，我们利用这些协议构建了一个复制的元数据服务称为TEEMS，并且展示了它可以用于为不受信任的云存储服务添加TEE级的机密性，完整性和新鲜度。我们的评估结果显示，与BFT版本相比，我们的协议性能显著提高（吞吐量提高了1.25倍到55倍），同时与不防止回滚攻击的CFT版本性能相同。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rr-a-fault-model-for-efficient-tee-replication/](https://www.ndss-symposium.org/ndss-paper/rr-a-fault-model-for-efficient-tee-replication/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-1-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-1-paper.pdf)
## Copy-on-Flip: Hardening ECC Memory Against Rowhammer Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#copy-on-flip-hardening-ecc-memory-against-rowhammer-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#copy-on-flip-hardening-ecc-memory-against-rowhammer-attacks)**
### 作者
* Andrea Di Dio, Vrije Universiteit Amsterdam
* Koen Koning, Intel
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### 摘要
> 尽管学术界和工业界已经进行了近十年的缓解努力，但该社区仍然未能找到一种实际解决行锤漏洞的方案。全面的软件缓解需要对商品系统进行复杂的更改，导致显著的运行时开销，并阻止了实际的采用。另一方面，硬件缓解通常更加强大和高效，但很难在商品系统上部署。直到最近，服务器平台上内存控制器实施的ECC内存似乎为借助硬件功能高效地将行锤漏洞转化为拒绝服务攻击提供了最佳选择。不幸的是，研究人员最近表明，攻击者可以通过逐位内存模板化和进行ECC感知的行锤攻击。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们重新考虑ECC内存作为行锤漏洞缓解的途径，并展示并非一切希望都失去了。特别地，我们展示了一种基于软件的设计，既能高效地又能有效地加固商品ECC内存以抵御ECC感知的行锤攻击。为了支持这一说法，我们提出了一种名为Copy-on-Flip（CoF）的基于ECC的软件缓解方案，它利用内存迁移和离线化的组合方式，在实际情况下停止商品服务器系统上的行锤攻击。关键思想是让操作系统介入所有的错误纠正事件，并在攻击者成功地对足够数量的位进行模板化后，立即将易受攻击的受害页面离线，同时透明地将受害数据迁移到新页面。我们在Linux上提供了CoF的原型，其中我们还展示了为支持相关用户和内核内存页面的迁移而进行简单的内存管理更改是可行的。我们的评估结果显示，CoF在性能和内存开销方面都很低，同时显著减少了行锤攻击的范围。在典型的基准测试中，如SPEC CPU2017和Google Chrome，CoF报告的开销小于1.5%，而在极端的I/O密集场景（饱和nginx）中，高达约11%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/copy-on-flip-hardening-ecc-memory-against-rowhammer-attacks/](https://www.ndss-symposium.org/ndss-paper/copy-on-flip-hardening-ecc-memory-against-rowhammer-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-337-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-337-paper.pdf)
## Extrapolating Formal Analysis to Uncover Attacks in Bluetooth Passkey Entry Pairing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#extrapolating-formal-analysis-to-uncover-attacks-in-bluetooth-passkey-entry-pairing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#extrapolating-formal-analysis-to-uncover-attacks-in-bluetooth-passkey-entry-pairing)**
### 作者
* Mohit Kumar Jangid, The Ohio State University
* Yue Zhang, Computer Science & Engineering
### 摘要
> 蓝牙是一种领先的无线通信技术，今天被数十亿物联网设备使用。其普及性要求对其安全性进行系统化的审查。蓝牙安全性的一个关键组成部分是安全配对，其中包括数字比较（NC）和密码输入（PE）。然而，大多数先前的形式化研究仅考虑了NC，而对PE尚未进行深入的形式化研究。在本文中，我们提出了对PE协议进行详细的形式分析。具体而言，我们使用Tamarin构建了一个通用的形式模型，通过准确捕捉协议行为和攻击者能力，来验证PE的安全性。令人鼓舞的是，它重新发现了三种已知的攻击（混淆攻击、静态密码攻击和反射攻击），更重要的是，还揭示了两种新的攻击（群组猜测攻击和幽灵攻击），涵盖了各种攻击向量（例如静态变量重用、多线程、反射、人为错误和受损设备）。最后，在修复每个漏洞后，我们的模型进一步通过归纳基本模型来证明PE协议的机密性和身份验证属性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/extrapolating-formal-analysis-to-uncover-attacks-in-bluetooth-passkey-entry-pairing/](https://www.ndss-symposium.org/ndss-paper/extrapolating-formal-analysis-to-uncover-attacks-in-bluetooth-passkey-entry-pairing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-119-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-119-paper.pdf)
## Attacks as Defenses: Designing Robust Audio CAPTCHAs Using Attacks on Automatic Speech Recognition Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#attacks-as-defenses-designing-robust-audio-captchas-using-attacks-on-automatic-speech-recognition-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#attacks-as-defenses-designing-robust-audio-captchas-using-attacks-on-automatic-speech-recognition-systems)**
### 作者
* Hadi Abdullah, Visa Research
* Aditya Karlekar, University of Florida
* Saurabh Prasad, University of Florida
* Muhammad Sajidur Rahman, University of Florida
* Logan Blue, University of Florida
* Luke A. Bauer, University of Florida
* Vincent Bindschaedler, University of Florida
* Patrick Traynor, University of Florida
### 摘要
> 音频CAPTCHA被认为是在线资源的强大防御措施；然而，语音转文本机制的进步使得这些防御措施失效。由于W3C将音频CAPTCHA明确列为重要的无障碍功能，因此不能简单地放弃音频CAPTCHA。因此，对于安全和易用的网络未来来说，更加稳健的音频CAPTCHA非常重要。我们研究了关于攻击语音转文本系统的最新文献，从中获得启示，构建出基于原则的稳健音频防御机制。我们首先比较了20篇最新的攻击文献，对它们进行分类和评估其作为新的“对转录稳健”但“易于人类理解”的CAPTCHA基础的适用性。在证明这些攻击单独来说都不足够之后，我们提出了一种新的机制，既在用户研究中经过了相对可理解性的评估，又难以自动转录（即$P({rm transcription}) = 4 times 10^{-5}$）。我们还证明了我们的音频样本在给予语音转文本系统时被检测为CAPTCHA的概率很高（$P({rm evasion}) = 1.77 times 10^{-4}$）。最后，我们证明了我们的方法对于WaveGuard是稳健的，WaveGuard是一种常用的机制，用于击败对抗性样本（并使ASR能够输出原始文本而不是对抗性文本）。我们展示了我们的方法可以以99%的成功率打破WaveGuard。通过这样做，我们不仅展示了一种破解难度约为四个数量级的CAPTCHA，而且表明这样的系统可以基于攻击文献所获得的见解来设计，利用人类和计算机处理音频的方式的差异。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/attacks-as-defenses-designing-robust-audio-captchas-using-attacks-on-automatic-speech-recognition-systems/](https://www.ndss-symposium.org/ndss-paper/attacks-as-defenses-designing-robust-audio-captchas-using-attacks-on-automatic-speech-recognition-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-243-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-243-paper.pdf)
## Cryptographic Oracle-based Conditional Payments.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#cryptographic-oracle-based-conditional-payments) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#cryptographic-oracle-based-conditional-payments)**
### 作者
* Varun Madathil, North Carolina State University
* Sri Aravinda Krishnan Thyagarajan, NTT Research
* Dimitrios Vasilopoulos, IMDEA Software Institute
* Lloyd Fournier, None
* Giulio Malavolta, Max Planck Institute for Security and Privacy
* Pedro Moreno-Sanchez, IMDEA Software Institute
### 摘要
> 考虑以下场景，有两个相互不信任的参与方，爱丽丝和鲍勃，希望根据某个真实世界事件的结果进行支付。一个半可信的预言机（或者在分布式信任环境中的阈值数量的预言机）被授权证明确实发生了这样的结果，只有在这种情况下支付才可能成功进行。这种基于预言机的条件支付在许多现实世界应用中普遍存在，如金融仲裁、预定支付或交易，并且是将真实世界事件信息引入区块链的必要构建基块。在这项工作中，我们展示了如何实现具有可证明安全性保证和高效实例化的基于预言机的条件支付。为此，我们提出了一种称为基于阈值签名的可验证见证加密（VweTS）的新型密码原语：用户可以加密在支付上的签名，如果阈值数量的签署者（例如预言机）为另一条消息（例如事件结果的描述）签署，那么可以解密。我们需要两个安全概念：（1）单向性，保证在没有阈值数量的签名的情况下，密文隐藏了加密的签名，（2）可验证性，保证一个正确验证的密文可以成功解密以揭示底层的签名。我们提供了基于VweTS的可证明安全和高效实例化，其中加密的签名可以是诸如Schnorr、ECDSA或BLS签名之类的广泛使用的方案之一。我们的主要技术创新是一种新的批处理技术，用于基于Lindell-Riva在混淆电路上的工作的切换和选择。我们的VweTS实例化可以轻松地用于今天几乎所有的加密货币上，以一种可互换、成本高效和可扩展的方式实现ObC支付。由此产生的基于预言机的条件支付是第一个支持分布式信任（即多个预言机）而不需要用户和预言机之间任何形式的同步或协调的支付。为了证明我们方案的实用性，我们提供了一种原型实现，我们的商用硬件基准测试表明，即使对于4-of-7的阈值和基于1024个不同真实世界事件结果条件的支付，计算开销也低于25秒，而通信开销低于2.3 MB。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cryptographic-oracle-based-conditional-payments/](https://www.ndss-symposium.org/ndss-paper/cryptographic-oracle-based-conditional-payments/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-24-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-24-paper.pdf)
## BlockScope: Detecting and Investigating Propagated Vulnerabilities in Forked Blockchain Projects.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#blockscope-detecting-and-investigating-propagated-vulnerabilities-in-forked-blockchain-projects) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#blockscope-detecting-and-investigating-propagated-vulnerabilities-in-forked-blockchain-projects)**
### 作者
* Xiao Yi, The Chinese University of Hong Kong
* Yuzhou Fang, The Chinese University of Hong Kong
* Daoyuan Wu, The Chinese University of Hong Kong
* Lingxiao Jiang, Singapore Management University
### 摘要
> 由于区块链生态系统的开源性质，新的区块链经常会分叉或部分重用经典区块链的代码。例如，热门的狗狗币、莱特币、币安BSC和Polygon都是比特币/以太坊的变体。因此，这些“分叉”的区块链可能会遭遇从比特币/以太坊传播而来的类似漏洞，无论是在分叉期间还是在随后的提交获取过程中。在本文中，我们对分叉区块链项目中传播的漏洞进行了系统研究和调查。为了方便这项研究，我们提出了BlockScope，这是一个新颖的工具，可以在给定现有比特币/以太坊安全补丁的输入情况下有效地检测多种类型的克隆漏洞。具体而言，BlockScope采用基于相似性的代码匹配，并设计了一种新的计算代码相似性的方法，以涵盖所有语法级别变体（即Type-1、Type-2和Type-3的克隆）。此外，BlockScope自动提取和利用补丁代码的上下文信息，缩小搜索范围并仅定位与比较相关的代码。
> 
> 
> 
> 
> 
> 
> 
> 我们的评估结果显示，BlockScope在精确度和召回率上都达到了很好的成绩，召回率达到了91.8%（比现有技术ReDeBug高出1.8倍，而精确度相近）。BlockScope使我们能够在比特币和以太坊的16个分叉项目中的13个项目中发现101个之前未知的漏洞，其中包括狗狗币的16个漏洞，莱特币的6个漏洞，币安BSC的1个漏洞和Optimism的4个漏洞。我们已经向这些漏洞的开发人员报告了情况；其中40个已得到修补或接受，66个被确认或待定，只有4个被拒绝。我们进一步调查了发现漏洞的传播和修补过程，并揭示了源代码到分叉项目的三种漏洞传播类型，以及比特币分叉项目发布补丁的较长延迟（大部分超过200天）（相比之下，以太坊分叉项目为约100天）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/blockscope-detecting-and-investigating-propagated-vulnerabilities-in-forked-blockchain-projects/](https://www.ndss-symposium.org/ndss-paper/blockscope-detecting-and-investigating-propagated-vulnerabilities-in-forked-blockchain-projects/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-222-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-222-paper.pdf)
## Breaking and Fixing Virtual Channels: Domino Attack and Donner.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#breaking-and-fixing-virtual-channels-domino-attack-and-donner) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#breaking-and-fixing-virtual-channels-domino-attack-and-donner)**
### 作者
* Lukas Aumayr, TU Wien
* Pedro Moreno-Sanchez, IMDEA Software Institute
* Aniket Kate, Purdue University / Supra
* Matteo Maffei, Christian Doppler Laboratory Blockchain Technologies for the Internet of Things / TU Wien
### 摘要
> 支付通道网络（PCNs）可以缓解当前分散式加密货币的可扩展性问题。它们允许用户通过中间支付通道的路径进行任意多笔支付，在只需要与区块链进行支付通道的开启和关闭交互时。然而，PCNs存在以下问题：一是只适用于支付，无法实现更复杂的智能合约功能，如支持预言机的离散对数合约；二是中间人的主动参与可能导致支付不可靠、慢、昂贵且侵犯隐私。虚拟通道是最有希望缓解这些问题的技术之一，它允许路径上的两个端点在不与区块链进行任何交互的情况下与中间人创建直接通道。一旦构建了这样的虚拟通道，端点可以将其用于除支付以外的应用，并且中间人不再参与更新。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们首先介绍了多米诺攻击，这是一种利用虚拟通道来破坏PCN自身的DoS/griefing风格攻击，与现有的兼容比特币的虚拟通道设计固有相结合。然后，我们通过对闪电网络（LN）的快照进行定量分析，展示了该攻击的严重性，而LN是目前部署最广泛的PCN。最后，我们讨论了现有虚拟通道设计的其他严重缺陷，比如只支持单个中间人、路径长度与延迟和区块链开销成正比，以及非恒定的用户存储开销。
> 
> 
> 
> 
> 
> 
> 
> 然后，我们提出了Donner，这是第一个能克服上述缺点的虚拟通道构建方法，它依靠一种新的设计范例。我们在通用可组合性框架中正式定义并证明了安全性和隐私性质。我们的评估结果显示，Donner是高效的，可以将争议时基于链上交易的数量从路径长度的线性减少到一个，这是防止多米诺攻击的关键，同时将存储开销从路径长度的对数级减少到恒定级。Donner与比特币兼容，可以轻松集成到LN中。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/breaking-and-fixing-virtual-channels-domino-attack-and-donner/](https://www.ndss-symposium.org/ndss-paper/breaking-and-fixing-virtual-channels-domino-attack-and-donner/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-370-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-370-paper.pdf)
## He-HTLC: Revisiting Incentives in HTLC.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#he-htlc-revisiting-incentives-in-htlc) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#he-htlc-revisiting-incentives-in-htlc)**
### 作者
* Sarisht Wadhwa, Duke University
* Jannis Stoeter, Duke University
* Fan Zhang, Duke University
### 摘要
> 哈希时间锁定合约（HTLCs）是区块链系统中广泛使用的原语，用于支付渠道、原子互换等。然而，HTLC存在激励不兼容性，并容易受到贿赂攻击。最先进的解决方案是MAD-HTLC（奥克兰'21），它提出了一个优雅的想法，利用矿工追求利润的本性来抵御贿赂攻击。
> 
> 
> 
> 
> 
> 
> 
> 本文通过一系列新型的逆贿赂攻击，展示了MAD-HTLC仍然存在漏洞，因为它只考虑了一些相对狭窄的被动策略。我们展示了矿工可以采取的具体主动策略，以破坏MAD-HTLC并从中获利，这些攻击我们提出了它们的实现和博弈论盈利分析。
> 
> 
> 
> 
> 
> 
> 
> 基于我们对攻击的学习，我们提出了一种新的HTLC实现，称为He-HTLC（我们的规范轻巧且对激励操纵攻击不敏感。因此，我们将其称为He-HTLC，其中He代表氦气）。He-HTLC在所有可能的策略操纵（被动和主动）下被证明是安全的。除了在更强的对手模型中安全外，He-HTLC还具有其他理想的特性，例如较低的、可调节的抵押品，使其更实用来实施和使用所提议的方案。我们在比特币上实施了He-HTLC，He-HTLC的交易成本与平均比特币交易费用相当。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/he-htlc-revisiting-incentives-in-htlc/](https://www.ndss-symposium.org/ndss-paper/he-htlc-revisiting-incentives-in-htlc/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-775-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-775-paper.pdf)
## Parakeet: Practical Key Transparency for End-to-End Encrypted Messaging.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#parakeet-practical-key-transparency-for-end-to-end-encrypted-messaging) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#parakeet-practical-key-transparency-for-end-to-end-encrypted-messaging)**
### 作者
* Harjasleen Malvai, UIUC/IC3
* Lefteris Kokoris-Kogias, IST Austria
* Alberto Sonnino, Mysten Labs
* Esha Ghosh, Microsoft Research
* Ercan Oztürk, Meta
* Kevin Lewi, Meta
* Sean Lawlor, Meta
### 摘要
> 加密单独不足以实现安全的端到端加密通讯：服务器还必须如实向用户提供公钥。密钥透明性被提出作为一种有效的解决方案，用于检测（从而阻止）企图欺诈性提供密钥的服务器。密钥透明性包括两个主要组成部分：（1）用户名到公钥的映射，由服务器存储并进行密码学承诺；（2）用于向用户提供短期承诺的带外一致性协议。在实际部署和支持生产规模的环境中，对于这两个组成部分必须考虑新的挑战。我们列举了这些挑战，并提供解决方案来解决它们。特别地，我们设计并实现了一个内存优化和隐私保护的可验证数据结构，用于承诺用户名到公钥存储。为了使这个实现适用于生产环境，我们还整合支持持久化和分布式存储的功能。我们还提出了一种面向未来的解决方案，称为“压缩”，作为缓解处理不断增长的服务器数据结构带来的实际问题的机制。最后，我们实现了一种无需共识的解决方案，满足透明应用一致分发承诺的最低要求，为用户提供更高效的协议。最终，我们基于我们的基准测试，得出了一个可供生产使用的密钥透明系统（Parakeet）的实现版本，并将其开源，以证明其可行性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/parakeet-practical-key-transparency-for-end-to-end-encrypted-messaging/](https://www.ndss-symposium.org/ndss-paper/parakeet-practical-key-transparency-for-end-to-end-encrypted-messaging/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-545-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-545-paper.pdf)
## The Power of Bamboo: On the Post-Compromise Security for Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#the-power-of-bamboo-on-the-post-compromise-security-for-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#the-power-of-bamboo-on-the-post-compromise-security-for-searchable-symmetric-encryption)**
### 作者
* Tianyang Chen, Huazhong University of Science and Technology
* Peng Xu, Huazhong University of Science and Technology
* Stjepan Picek, Radboud University
* Bo Luo, The University of Kansas
* Willy Susilo, University of Wollongong
* Hai Jin, Huazhong University of Science and Technology
* Kaitai Liang, TU Delft
### 摘要
> 动态可搜索对称加密(DSSE)使用户能够在动态更新的加密数据库上委托关键字搜索给一个正直但好奇的服务器，而不失去关键字隐私。本文研究了一种新的实际安全风险，即秘密密钥泄漏(例如，用户的秘密密钥被泄露或盗窃)，这威胁到现有DSSE方案提供的所有安全保证。为了解决这个开放性问题，我们引入了具有非交互式密钥更新选项的可搜索加密(SEKU)的概念。我们进一步定义了与泄漏函数相关的后泄漏安全性的概念，以研究在客户端的秘密密钥被泄漏后，DSSE方案是否仍然能提供数据安全性。我们证明了后泄漏安全性可以通过一个名为“Bamboo”的提议协议实现。有趣的是，Bamboo的泄漏函数同时满足正向安全性和逆向安全性的要求。我们使用一个真实数据集对Bamboo进行性能评估，并将其运行时效率与现有的正向和逆向安全的DSSE方案进行比较。结果表明Bamboo在提供更好或相当的性能的同时提供了强大的安全性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-power-of-bamboo-on-the-post-compromise-security-for-searchable-symmetric-encryption/](https://www.ndss-symposium.org/ndss-paper/the-power-of-bamboo-on-the-post-compromise-security-for-searchable-symmetric-encryption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-725-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-725-paper.pdf)
## Private Certifier Intersection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#private-certifier-intersection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#private-certifier-intersection)**
### 作者
* Bishakh Chandra Ghosh, Indian Institute of Technology Kharagpur
* Sikhar Patranabis, IBM Research - India
* Dhinakaran Vinayagamurthy, IBM Research - India
* Venkatraman Ramakrishna, IBM Research - India
* Krishnasuri Narayanam, IBM Research - India
* Sandip Chakraborty, Indian Institute of Technology Kharagpur
### 摘要
> 我们开展了对私有认证器交集（PCI）的研究，该交集允许彼此不信任的各方在存在一个或多个共同的信任机构（认证器）的情况下建立用于交互验证声明的信任基础。这是Web 3.0可验证演示的基本要求之一，因为它提供了额外的隐私保护而不损害去中心化。PCI协议允许持有证书的两个或多个各方识别出一组共同的认证器，并在验证由这些认证器颁发的证书的同时，不透露任何有关于未在输出交集中的认证器的信息。在本文中，我们在基于Simplified-UC框架的两种不同设置下正式定义了多方PCI的概念，具体取决于是否需要任何声明的证书（称为PCI-Any）或全部声明的证书（称为PCI-All）。然后，我们设计并实现了两个可证明安全且实际高效的PCI协议，用于验证基于数字签名的证书：基于ECDSA的PCI-Any协议和基于BLS的PCI-All协议。我们提议方案的技术核心是第一个基于秘密共享的MPC框架，支持高效计算椭圆曲线运算，包括椭圆曲线配对。我们借助于知名的MP-SPDZ库，在OpenSSL和RELIC上构建了这个框架，并使用这个实现在LAN和WAN设置中对我们提出的PCI协议进行了基准测试。在位于不同大陆的各方进行的洲际WAN设置中，我们的协议在大小为40的输入集上执行时间不到一分钟，这证明了我们提出解决方案的可行性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/private-certifier-intersection/](https://www.ndss-symposium.org/ndss-paper/private-certifier-intersection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-563-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-563-paper.pdf)
## OBI: a multi-path oblivious RAM for forward-and-backward-secure searchable encryption.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#obi-a-multi-path-oblivious-ram-for-forward-and-backward-secure-searchable-encryption) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#obi-a-multi-path-oblivious-ram-for-forward-and-backward-secure-searchable-encryption)**
### 作者
* Zhiqiang Wu, Changsha University of Science and Technology
* Rui Li, Dongguan University of Technology
### 摘要
> 动态可搜索加密（DSE）是一种用于在外部加密数据上进行搜索的用户-云协议。许多当前的DSE方案采用了忘我RAM（ORAM）来实现前向隐私和后向隐私，这是描述协议安全级别的概念。然而，我们发现大多数基于ORAM的DSE方案存在一个新问题：获取/插入大量数据块效率低下。我们将此称为大快速逐出问题。为了解决这个问题，我们提出了OBI，一种多路径忘我RAM，每次查询可以访问多个树路径以处理大量数据块。我们将传统基于树的ORAM分类为单路径ORAM，如果它们每次查询只访问一个路径。OBI具有两种新的高吞吐多路径逐出算法，当存储区域很大时，其效率比著名的PATH-ORAM逐出算法高出几个数量级。我们证明了所提出的多路径ORAM在本地存储区大小和插入效率方面优于传统的单路径ORAM。安全分析表明，OBI在强前向隐私和后向隐私模型下是安全的。OBI可以保护已知的DSE泄露，如搜索模式和大小模式。我们还展示了OBI可以应用于忘我文件系统和忘我联接查询DSE方案。我们在Enron数据集上进行了实验。实验结果表明，OBI比最先进的基于ORAM的DSE方案要高效得多。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/obi-a-multi-path-oblivious-ram-for-forward-and-backward-secure-searchable-encryption/](https://www.ndss-symposium.org/ndss-paper/obi-a-multi-path-oblivious-ram-for-forward-and-backward-secure-searchable-encryption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-423-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-423-paper.pdf)
## Un-Rocking Drones: Foundations of Acoustic Injection Attacks and Recovery Thereof.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#un-rocking-drones-foundations-of-acoustic-injection-attacks-and-recovery-thereof) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#un-rocking-drones-foundations-of-acoustic-injection-attacks-and-recovery-thereof)**
### 作者
* Jinseob Jeong, KAIST
### 摘要
> 配备了微电子机械系统（MEMS）惯性测量单元（IMU）传感器的无人机面临声学注入攻击。这些攻击会共振传感器，损害其输出并导致无人机坠毁。已经提出了几种缓解策略；然而，由于无法在遭受攻击时使无人机飞往其计划目的地，它们在实际应用上存在局限性。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这个问题，我们旨在恢复已损坏的传感器值，以便在面对声学注入攻击时实现实用的缓解方法。为了实现这一目标，我们首先构建了一个逼真的测试平台，并深入研究了共振MEMS传感器对无人机的影响。我们发现在攻击期间，取样抖动（指检索传感器值时的不一致时间延迟）对无人机坠毁有重大影响。需要注意的是，尽管任何实时系统都需要满足其实时要求，但由于制造误差或调度/操作开销，它确实存在取样抖动。从实时要求的角度来看，取样抖动可以忽略不计；然而，我们发现在受攻击的无人机上，取样抖动变得至关重要。这是因为取样抖动将共振传感器信号扩展到无人机的控制逻辑的带内范围，从而中和了无人机的安全机制，例如低通滤波器。
> 
> 
> 
> 
> 
> 
> 
> 将受取样抖动影响的共振信号视为噪声，我们开发了一种新的缓解策略，利用噪声降低技术，即去噪自编码器。这种方法可以从受损的共振MEMS IMU传感器中恢复出正常的传感器信号，而无需其他辅助传感器。我们实现了这个原型系统，命名为UNROCKER，并通过一系列反映真实场景的实验来展示其能力。为了促进未来的研究，我们发布了我们的源代码和实验数据。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/un-rocking-drones-foundations-of-acoustic-injection-attacks-and-recovery-thereof/](https://www.ndss-symposium.org/ndss-paper/un-rocking-drones-foundations-of-acoustic-injection-attacks-and-recovery-thereof/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f112_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f112_paper.pdf)
## EdgeTDC: On the Security of Time Difference of Arrival Measurements in CAN Bus Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#edgetdc-on-the-security-of-time-difference-of-arrival-measurements-in-can-bus-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#edgetdc-on-the-security-of-time-difference-of-arrival-measurements-in-can-bus-systems)**
### 作者
* Marc Roeschlin, ETH Zurich
### 摘要
> 控制器区域网络（CAN总线）是一种基于消息的协议，专为车内通信设计，主要考虑了稳固性和安全性。在实际应用中，CAN总线并不提供消息鉴别等常见的安全功能。由于汽车供应商需要保证互操作性，大多数制造商依赖于一个十年前的标准（ISO 11898），而通过引入MAC是不切实际的。因此，研究者建议使用CAN总线入侵检测系统（IDS）来解决这种缺乏身份验证的问题，该系统通过增加独立模块来加强总线。IDS通过测量传输帧的物理层特征将消息归属于相应的发送者。这些特征基于时序、电压水平、暂态变化，以及最近引入的到达时间差（TDoA）测量。在本文中，我们展示了先前文献中基于TDoA的方法容易受到新型欺骗和篡改攻击的漏洞。我们描述了如何修复这些方案，并呈现了我们自己的方法——EdgeTDC。与现有方法不同，EdgeTDC不依赖于具有高采样率和高动态范围的模拟数字转换器（ADC）来捕获样本级别粒度的信号。我们的方法使用时间数字转换器（TDC）来检测边缘并测量其时序。尽管实施成本低廉，TDC具有低延迟、高定位精度和能够测量帧中每个单独边缘（上升沿和下降沿）的能力。测量每个边缘使模拟采样变得多余，并允许计算统计数据，甚至可以检测到对消息部分的篡改。通过大量实验，我们展示了EdgeTDC能够成功防御现代车辆CAN系统中的伪装攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/edgetdc-on-the-security-of-time-difference-of-arrival-measurements-in-can-bus-systems/](https://www.ndss-symposium.org/ndss-paper/edgetdc-on-the-security-of-time-difference-of-arrival-measurements-in-can-bus-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-271-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-271-paper.pdf)
## Evasion Attacks and Defenses on Smart Home Physical Event Verification.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#evasion-attacks-and-defenses-on-smart-home-physical-event-verification) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#evasion-attacks-and-defenses-on-smart-home-physical-event-verification)**
### 作者
* Muslum Ozgur Ozmen, Purdue University
* Ruoyu Song, Purdue University
* Habiba Farrukh, Purdue University
* Z. Berkay Celik, Purdue University
### 摘要
> 在智能家居中，当执行器的状态发生变化时，它会向物联网中心发送事件通知以报告这一变化（例如，门被解锁了）。之前的研究表明，事件通知容易受到欺骗和屏蔽攻击。在事件欺骗中，对手向物联网中心报告一个实际上没有发生的虚假事件通知。在事件屏蔽中，对手抑制了一个实际上发生的事件的通知。这些攻击导致执行器的物理状态与网络状态存在不一致，使得对手可以通过触发物联网应用间接控制安全关键设备。为了缓解这些攻击，事件验证系统（EVS）或广义的物联网异常检测系统利用描述事件之间关系及其对传感器读数影响的物理事件指纹。然而，智能家居中事件和传感器之间存在复杂的物理相互作用，这些相互作用构成了事件指纹。我们对最近的EVS进行了研究，不幸的是，我们发现它们普遍忽略了这种相互作用，这使得对手可以逃避这些系统并成功进行事件欺骗和屏蔽攻击而不会被检测到。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首先探讨了可回避的物理事件指纹，并展示了在相同的威胁模型下，对手如何利用它们来绕过EVS。我们开发了两种防御措施，EVS软件修补和传感器布置与物理建模和形式分析的相互作用，以生成强大的物理事件指纹，并展示了它们如何集成到EVS中。我们在两个包含12个执行器和16个传感器的智能家居环境中评估了我们方法的有效性，并部署了两个不同的最先进EVS。我们的实验表明，71%的物理指纹容易被回避。通过采用我们的方法，它们构建了强大的物理事件指纹，从而适当地缓解了现实攻击向量。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/evasion-attacks-and-defenses-on-smart-home-physical-event-verification/](https://www.ndss-symposium.org/ndss-paper/evasion-attacks-and-defenses-on-smart-home-physical-event-verification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-70-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-70-paper.pdf)
## SoundLock: A Novel User Authentication Scheme for VR Devices Using Auditory-Pupillary Response.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#soundlock-a-novel-user-authentication-scheme-for-vr-devices-using-auditory-pupillary-response) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#soundlock-a-novel-user-authentication-scheme-for-vr-devices-using-auditory-pupillary-response)**
### 作者
* Huadi Zhu, The University of Texas at Arlington
* Mingyan Xiao, The University of Texas at Arlington
* Demoria Sherman, The University of Texas at Arlington
* Ming Li, The University of Texas at Arlington
### 摘要
> 虚拟现实（VR）在电子商务、医疗保健和社交网络等许多应用中展示出了巨大的潜力。VR设备中存储着关于用户活动和在线账户的丰富信息。如果这些设备不小心被疏忽或者被第三方访问，就会导致数据泄露和其他严重后果。虚拟现实设备急需实用的用户认证方案。目前的解决方案包括密码、数字密码和图案锁等主要采用传统的个人设备认证方法。这些方法在安全性和可用性方面都受到了批评。在本研究中，我们提出了一种新型的用户认证方案SoundLock，该方案使用听觉瞳孔反应作为生物识别技术来认证虚拟现实设备的用户。在认证过程中，通过VR头显向用户播放听觉刺激，同时通过眼动追踪器捕获相应的瞳孔反应。通过将用户的反应与在注册阶段生成的模板进行比对来确定用户的合法性。为了在方案设计中在安全性和可用性之间取得平衡，我们制定了一个优化问题。由于其非线性，我们提出了一个两阶段启发式算法来有效地解决问题。该解决方案提供了选择有效听觉刺激和确定其相应长度的必要指导。我们通过大量的现场实验证明，SoundLock在FAR（误通过率）为0.76%、FRR（误拒绝率）为0.91%的情况下优于现有的生物识别解决方案，并且在用户研究中得到了良好的接受度。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/soundlock-a-novel-user-authentication-scheme-for-vr-devices-using-auditory-pupillary-response/](https://www.ndss-symposium.org/ndss-paper/soundlock-a-novel-user-authentication-scheme-for-vr-devices-using-auditory-pupillary-response/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-298-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-298-paper.pdf)
## Accountable Javascript Code Delivery.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#accountable-javascript-code-delivery) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#accountable-javascript-code-delivery)**
### 作者
* Ilkan Esiyok, CISPA Helmholtz Center for Information Security
* Pascal Berrang, University of Birmingham & Nimiq
* Katriel Cohn-Gordon, Meta
* Robert Künnemann, CISPA Helmholtz Center for Information Security
### 摘要
> 互联网是Web应用程序的主要分发平台，但目前还没有有效的透明度和审计机制。由于Web应用程序的瞬息万变的特性，访问网站的客户端无法保证它所接收到的代码今天与昨天相同，或者与其他访问者接收到的相同。尽管Web安全有所提高，但在渲染浏览器之前审计Web应用程序仍然具有挑战性。我们提出了Accountable JS，这是一个用于Web页面上可核查活动内容的浏览器扩展和可选择的协议。我们通过Tamarin Prover对协议进行了原型设计、形式建模安全属性，并通过WhatsApp Web、AdSense和Nimiq等案例研究评估了其兼容性和性能影响。
> 
> 
> 
> 
> 
> 
> 
> 随着Meta最近宣布将Code Verify应用于20亿WhatsApp用户，可追溯性正开始大规模部署，但对这种协议的形式分析还很少。我们采用Tamarin Prover对Code Verify进行了形式建模，并将其属性与我们的Accountable JS协议进行了比较。我们还比较了Code Verify和Accountable JS扩展对WhatsApp Web的性能影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/accountable-javascript-code-delivery/](https://www.ndss-symposium.org/ndss-paper/accountable-javascript-code-delivery/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-96-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-96-paper.pdf)
## ReScan: A Middleware Framework for Realistic and Robust Black-box Web Application Scanning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rescan-a-middleware-framework-for-realistic-and-robust-black-box-web-application-scanning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#rescan-a-middleware-framework-for-realistic-and-robust-black-box-web-application-scanning)**
### 作者
* Kostas Drakonakis, FORTH
* Sotiris Ioannidis, Technical University of Crete
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 黑盒网络漏洞扫描工具对于安全研究人员和从业者来说非常宝贵。尽管近年来一些方法弥补了扫描工具固有的一些局限性，但许多工具在与现代网络浏览器和应用程序的发展方面仍未充分适应，并且常常缺乏处理与现代网络应用程序导航和交互的困难的能力。本文提出了一种完全不同的策略，而不是构建一个仅能集成现有多样化漏洞发现能力有限的扫描工具的替代扫描工具。我们提出了ReScan，这是一个与扫描工具无关的中间件框架，通过在一个现实且稳健的环境中协调扫描工具与网络应用程序的交互，从而透明地增强了扫描工具的能力。本框架可以与任何漏洞扫描工具配合使用，使用户能够享受现有和未来扫描工具的能力。我们的可扩展和模块化框架包括一系列增强技术，解决了现代漏洞扫描工具常遇到的限制和障碍。我们的实验评估表明，尽管完全的浏览器带来了相当大的开销，但我们的框架显著提高了流行扫描工具的代码覆盖率（平均168%），从而在检测到反射型和存储型XSS漏洞的数量上分别增加了66%和161%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rescan-a-middleware-framework-for-realistic-and-robust-black-box-web-application-scanning/](https://www.ndss-symposium.org/ndss-paper/rescan-a-middleware-framework-for-realistic-and-robust-black-box-web-application-scanning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-169-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-169-paper.pdf)
## Him of Many Faces: Characterizing Billion-scale Adversarial and Benign Browser Fingerprints on Commercial Websites.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#him-of-many-faces-characterizing-billion-scale-adversarial-and-benign-browser-fingerprints-on-commercial-websites) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#him-of-many-faces-characterizing-billion-scale-adversarial-and-benign-browser-fingerprints-on-commercial-websites)**
### 作者
* Shujiang Wu, Johns Hopkins University
* Pengfei Sun, F5
### 摘要
> 浏览器指纹，虽然传统上被用于网络追踪，但近年来越来越多地被用于对现实世界网站的各种攻击进行防御或检测。面对这些情况，攻击者也升级他们的武器来生成自己的指纹，即所谓的敌对指纹，以绕过现有的防御或检测。显然，这些敌对指纹与用户浏览器的良性指纹不同，因为它们是有意为之以绕过防御的。然而，以往的研究尚未通过比较敌对和良性指纹来研究这种差异，更不用说如何生成敌对指纹了。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了第一个从14个主要商业网站（全部都排在Alexa/Tranco排名前10,000位）收集的浏览器指纹的十亿级测量研究。我们进一步使用一家主要安全公司的基于学习和反馈驱动的欺诈和机器人检测系统，将这些指纹分为敌对和良性，然后研究它们之间的差异。我们的结果得出了三个主要观察结果：（i）敌对指纹在许多指标上与良性指纹显著不同，例如熵、唯一性比率和进化速度；（ii）攻击者采用各种工具和策略生成敌对指纹；（iii）敌对指纹在不同类型的攻击中有所变化，例如从内容抓取到欺诈交易。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/him-of-many-faces-characterizing-billion-scale-adversarial-and-benign-browser-fingerprints-on-commercial-websites/](https://www.ndss-symposium.org/ndss-paper/him-of-many-faces-characterizing-billion-scale-adversarial-and-benign-browser-fingerprints-on-commercial-websites/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-394-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-394-paper.pdf)
## A Security Study about Electron Applications and a Programming Methodology to Tame DOM Functionalities.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#a-security-study-about-electron-applications-and-a-programming-methodology-to-tame-dom-functionalities) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#a-security-study-about-electron-applications-and-a-programming-methodology-to-tame-dom-functionalities)**
### 作者
* Zihao Jin, Microsoft Research and Tsinghua University
* Shuo Chen, Microsoft Research
* Yang Chen, Microsoft Research
* Haixin Duan, Tsinghua University and Quancheng Laboratory
* Jianjun Chen, Tsinghua University and Zhongguancun Laboratory
* Jianping Wu, Tsinghua University
### 摘要
> Electron平台代表了一种使用HTML和JavaScript开发现代桌面应用程序的范例。Microsoft Teams、Visual Studio Code和其他旗舰产品都是Electron应用的例子。这种新的范例将网络编程中的安全挑战引入到桌面应用程序领域，从而为本地机器的利用开辟了新的途径。我们对真实世界的Electron应用进行了安全研究，并发现了许多漏洞，这些漏洞现在已得到应用程序供应商的确认。传统智慧认为将这些错误视为"净化错误"。因此，安全编程要求程序员明确枚举所有种类的意外输入进行净化。我们认为，安全编程应该专注于指定程序员的意图，而非他们的非意图。我们引入了一个名为"DOM-tree type"的概念，它表示应用程序在执行过程中期望看到的DOM树集合，因此，如果有利用行为发生，将被视为类型违规。凭借对HTML标准和Chromium引擎的深入了解，我们将DOM树类型机制构建到了Electron平台中。评估结果显示，这种方法是可行的，并确保了我们在研究中发现的所有有漏洞的应用程序的安全性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-security-study-about-electron-applications-and-a-programming-methodology-to-tame-dom-functionalities/](https://www.ndss-symposium.org/ndss-paper/a-security-study-about-electron-applications-and-a-programming-methodology-to-tame-dom-functionalities/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-305-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-305-paper.pdf)
## An OS-agnostic Approach to Memory Forensics.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#an-os-agnostic-approach-to-memory-forensics) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#an-os-agnostic-approach-to-memory-forensics)**
### 作者
* Andrea Oliveri, EURECOM
* Matteo Dell'Amico, University of Genoa
* Davide Balzarotti, EURECOM
### 摘要
> 内存转储的分析面临着独特的挑战，因为操作系统在内存中使用各种（通常是未记录的）方式来表示数据。为了解决这个问题，取证工具维护了一个精确描述少数几个操作系统使用的内核数据结构的模型集合。然而，这些模型无法泛化，并且为封闭源系统开发新模型可能需要长时间且繁琐的逆向工程。过去几年中，物联网设备、智能家居设备和基于云的虚拟机的数量急剧增加，导致当前取证工具不支持的操作系统数量增加。到目前为止，我们一直基于手写的模型和规则进行内存取证，但无法跟上如此多样化的系统。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这个问题，在本文中我们引入了新概念“OS-不可知内存取证”，该概念基于一种可以在没有对底层操作系统了解的情况下恢复某些取证信息的技术。我们的方法仅通过使用数据结构的拓扑约束就能自动识别不同类型的数据结构，并支持两种调查模式。第一种模式可以通过从预定的种子（如进程名称或IP地址）开始，即取证相关信息的片段，这些信息分析员事先知道或在转储中可以轻松辨别。我们的实验证明，即使只有一个种子，也足以在从14种不同操作系统获得的转储中恢复出完整的进程列表和其他重要的取证数据结构，而不需要了解底层内核。在第二种操作模式中，我们的系统不需要种子，而是使用一组启发式规则对所有内存数据结构进行排名，并只呈现给分析员最有前途的数据结构。即使在这种情况下，我们的实验证明，分析员也可以在真正的OS-不可知场景中使用我们的方法轻松识别取证相关的结构化信息。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/an-os-agnostic-approach-to-memory-forensics/](https://www.ndss-symposium.org/ndss-paper/an-os-agnostic-approach-to-memory-forensics/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-398-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-398-paper.pdf)
## BEAGLE: Forensics of Deep Learning Backdoor Attack for Better Defense.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#beagle-forensics-of-deep-learning-backdoor-attack-for-better-defense) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#beagle-forensics-of-deep-learning-backdoor-attack-for-better-defense)**
### 作者
* Siyuan Cheng, Purdue University
* Guanhong Tao, Purdue University
* Yingqi Liu, Purdue University
* Shengwei An, Purdue University
* Xiangzhe Xu, Purdue University
* Shiwei Feng, Purdue University
* Guangyu Shen, Purdue University
* Kaiyuan Zhang, Purdue University
* Qiuling Xu, Purdue University
* Shiqing Ma, Rutgers University
* Xiangyu Zhang, Purdue University
### 摘要
> 深度学习后门攻击具有类似传统网络攻击的威胁模型。攻击取证是传统网络攻击的一项重要对策，因此对于防御模型后门攻击而言也非常重要。本论文提出了一种新颖的模型后门取证技术。通过给定一些具有后门触发器的攻击样本，即可能代表不同类型后门的输入，我们的技术自动将它们分解成干净的输入和相应的触发器。然后根据它们的属性对触发器进行聚类，以实现自动攻击分类和总结。然后可以自动合成后门扫描器，以在其他模型中查找相同类型的后门实例。我们对2,532个预训练模型、10种常见攻击进行了评估，并与9个对照组进行了比较，结果表明我们的技术非常有效。分解后的干净输入和触发器与实际情况非常相似。合成的扫描器明显优于几乎无法泛化到不同种类攻击的现有扫描器的基础版本。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/beagle-forensics-of-deep-learning-backdoor-attack-for-better-defense/](https://www.ndss-symposium.org/ndss-paper/beagle-forensics-of-deep-learning-backdoor-attack-for-better-defense/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-944-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-944-paper.pdf)
## Double and Nothing: Understanding and Detecting Cryptocurrency Giveaway Scams.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#double-and-nothing-understanding-and-detecting-cryptocurrency-giveaway-scams) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#double-and-nothing-understanding-and-detecting-cryptocurrency-giveaway-scams)**
### 作者
* Xigao Li, Stony Brook University
* Anurag Yepuri, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 随着加密货币的流行和用户自己获取和管理自己的资产，攻击者开始从仅滥用加密货币作为支付机制转向窃取终端用户的加密资产。在本文中，我们报道了对加密货币赠品骗局的首次大规模分析。赠品骗局是一种欺骗性简单的骗局，攻击者在网页上设立虚假活动并承诺用户将其发送到特定钱包地址的资金翻倍或翻三倍。为了了解野外骗局的总体规模，我们设计并实施了CryptoScamTracker，这是一种利用证书透明度日志来识别可能的赠品骗局的工具。通过为期6个月的实验，CryptoScamTracker识别出了总共10,079个针对所有流行加密货币用户的赠品骗局网站。除了分析赠品骗子的主机和域名偏好外，我们还通过滥用加密货币的公共区块链，提取与2,266个骗子钱包相关的交易，对赃款进行了首次定量分析。我们发现仅在我们的报道期内发现的赠品骗局中，攻击者窃取了数千万美元的资金，并组织了跨不同加密货币的大规模活动。最后，我们发现攻击者试图通过提供资金恢复服务重新对受害者进行骗取，并且一些受害者多次向同一骗子发送资金的证据。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/double-and-nothing-understanding-and-detecting-cryptocurrency-giveaway-scams/](https://www.ndss-symposium.org/ndss-paper/double-and-nothing-understanding-and-detecting-cryptocurrency-giveaway-scams/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-584-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-584-paper.pdf)
## Preventing SIM Box Fraud Using Device Model Fingerprinting.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#preventing-sim-box-fraud-using-device-model-fingerprinting) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#preventing-sim-box-fraud-using-device-model-fingerprinting)**
### 作者
* BeomSeok Oh, KAIST
* Junho Ahn, KAIST
* Sangwook Bae, KAIST
* Mincheol Son, KAIST
* Yonghwa Lee, KAIST
* Min Suk Kang, KAIST
* Yongdae Kim, KAIST
### 摘要
> SIM盒在地下国际规模欺诈生态系统中扮演着至关重要的角色，从全球个人受害者和移动网络运营商那里窃取数十亿美元。针对这些欺诈行为已经提出了许多缓解方案，主要是为了检测欺诈呼叫会话；然而，尽管其高度期望的好处，但对这个问题的一个直接方法---防止SIM盒设备在网络中使用---尚未引起太多关注。这正是我们在本文中要实现的目标。我们提出了一个简单的访问控制逻辑，用于检测未经授权的SIM盒在使用蜂窝网络进行通信时。我们防御方案的核心是对设备型号（例如，区分iPhone 13与市场上其他智能手机型号）和设备类型（即智能手机和物联网设备）进行精确指纹识别，而无需依赖易于伪造的国际移动设备身份。我们通过实验证明了，从具有超过31,000个特征的网络层辅助信息构建的指纹在85款智能手机中基本上是独特的，因此可以用来防止绝大多数非法SIM盒进行未经授权的语音呼叫。我们的提案作为第一个实用、可靠的未经授权蜂窝设备型号检测方案，极大地简化了对SIM盒欺诈的缓解。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/preventing-sim-box-fraud-using-device-model-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/preventing-sim-box-fraud-using-device-model-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-416-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-416-paper.pdf)
## Access Your Tesla without Your Awareness: Compromising Keyless Entry System of Model 3.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#access-your-tesla-without-your-awareness-compromising-keyless-entry-system-of-model-3) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#access-your-tesla-without-your-awareness-compromising-keyless-entry-system-of-model-3)**
### 作者
* Xinyi Xie, Shanghai Fudan Microelectronics Group Co.
### 摘要
> 特斯拉Model 3配备了手机钥匙和钥匙卡，除了传统的钥匙外，以提供更好的驾驶体验。这些新功能使驾驶员能够在车辆和钥匙之间进行无线认证过程，进而无需使用机械钥匙即可进入和启动车辆。与刷钥匙卡的要求不同，特斯拉手机应用的手机钥匙功能可以在手机仍在口袋或包中时解锁Model 3。
> 
> 
> 
> 
> 
> 
> 
> 本文针对特斯拉钥匙，特别是钥匙卡和手机钥匙，进行了详尽的安全分析。从对移动应用的逆向工程和嗅探通信数据开始，我们重新建立了配对和认证协议，并分析了其潜在问题。缺少证书验证将使非官方钥匙卡能够像官方钥匙卡一样工作。使用这些第三方产品可能导致严重的安全问题。此外，当前协议的弱点导致了通过蓝牙通道的中间人攻击。中间人攻击是一种改进的中继攻击，突破了手机钥匙的认证程序的安全性。我们还开发了一个名为TESmLA的应用程序，安装在定制的Android设备上，以完成概念验证。攻击者可以在车主毫不知情的情况下破解特斯拉Model 3并驾驶车辆离开。我们的研究结果对被动式无钥匙进入和启动系统（PKES）以及安全关键应用中的蓝牙实现的安全性提出了质疑。为了减轻安全问题，我们讨论了相应的防范措施和未来可行的安全方案。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/access-your-tesla-without-your-awareness-compromising-keyless-entry-system-of-model-3/](https://www.ndss-symposium.org/ndss-paper/access-your-tesla-without-your-awareness-compromising-keyless-entry-system-of-model-3/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-82-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-82-paper.pdf)
## MetaWave: Attacking mmWave Sensing with Meta-material-enhanced Tags.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#metawave-attacking-mmwave-sensing-with-meta-material-enhanced-tags) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#metawave-attacking-mmwave-sensing-with-meta-material-enhanced-tags)**
### 作者
* Xingyu Chen, University of Colorado Denver
* Zhengxiong Li, University of Colorado Denver
* Baicheng Chen, University of California San Diego
* Yi Zhu, SUNY at Buffalo
* Chris Xiaoxuan Lu, University of Edinburgh
* Zhengyu Peng, Aptiv
* Feng Lin, Zhejiang University
* Wenyao Xu, SUNY Buffalo
* Kui Ren, Zhejiang University
* Chunming Qiao, SUNY at Buffalo
### 摘要
> 毫米波（mmWave）感知已经应用于许多关键应用，为全球数以千万计的人员提供服务。然而，在现实世界中，它容易受到攻击。这些攻击是基于昂贵和专业的射频（RF）调制器为基础的仪器，并且可以通过常规做法（例如RF指纹）来防止。在本文中，我们提出并设计了一种新型的无源mmWave攻击，称为MetaWave，采用成本低廉且易于获取的元材料标签来进行幻灭和幽灵攻击。这些元材料标签由商业现货（COTS）材料制成，具有定制的标签设计，用于攻击各种目标，大大降低了mmWave感知的攻击门槛。具体而言，我们证明了由常规材料（例如C-RAM LF）制成的标签可以用来精确篡改mmWave回波信号并欺骗距离、角度和速度感知测量。此外，为了优化攻击，提出并设计了一个基于通用模拟器的MetaWave攻击框架，用于模拟标签对具有先进标签和场景参数的mmWave信号的调制效果。我们通过模拟和真实世界实验（即20个不同环境）来评估MetaWave，即元材料标签攻击在各种攻击设置下的表现。实验结果表明，MetaWave在实际应用中可以实现高达97%的范围估计的Top-1攻击准确率，96%的角度估计准确率和91%的速度估计准确率，相较于现有的毫米波攻击方法，成本降低了10-100倍。我们还评估了MetaWave在不同实际场景下的可用性和稳健性。此外，我们对MetaWave mmWave攻击的对策进行了深入分析和讨论，以提高无线感知和网络基础设施安全性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/metawave-attacking-mmwave-sensing-with-meta-material-enhanced-tags/](https://www.ndss-symposium.org/ndss-paper/metawave-attacking-mmwave-sensing-with-meta-material-enhanced-tags/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-348-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-348-paper.pdf)
## Paralyzing Drones via EMI Signal Injection on Sensory Communication Channels.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#paralyzing-drones-via-emi-signal-injection-on-sensory-communication-channels) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#paralyzing-drones-via-emi-signal-injection-on-sensory-communication-channels)**
### 作者
* Joonha Jang, KAIST
* ManGi Cho, KAIST
* Jaehoon Kim, KAIST
* Dongkwan Kim, Samsung SDS
* Yongdae Kim, KAIST
### 摘要
> 惯性测量单元（IMU）负责无人机的姿态控制。它由各种传感器组成，并将传感器数据传输到无人机的控制单元。如果它报告错误的数据，无人机将无法保持姿态并坠毁。因此，一些反无人机研究集中在使用精心制作的声波引起内部传感器的机械结构共振，从而导致IMU传感器数据产生显着波动。然而，出于以下几个原因，这种方法的效力有限。由于IMU中每个传感器的结构细节因类型、型号和制造商而异，攻击需要分别针对每个传感器进行。此外，通过使用不受攻击影响甚至简单塑料屏蔽的其他辅助传感器，攻击可以很容易地得到缓解。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了一种新颖的反无人机技术，可以有效地扭曲任何类型、型号和制造商的IMU传感器数据。我们的关键想法是通过使用电磁干扰（EMI）信号注入来扭曲无人机IMU与控制单元之间的通信通道。在实验中，无论使用何种传感器，我们发现了一个明显易受EMI信号严重扭曲传感器数据的频率。与一般电磁脉冲（EMP）攻击相比，它需要更少的功率，因为它针对特定易受攻击频率。它还可以避免EMP攻击带来的附带损害。为了实际评估，我们使用真实的无人机演示了这种攻击的可行性；攻击立即使无人机瘫痪。最后，我们提出了对其缓解的实际挑战。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/paralyzing-drones-via-emi-signal-injection-on-sensory-communication-channels/](https://www.ndss-symposium.org/ndss-paper/paralyzing-drones-via-emi-signal-injection-on-sensory-communication-channels/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-616-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-616-paper.pdf)
## Brokenwire : Wireless Disruption of CCS Electric Vehicle Charging.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#brokenwire-wireless-disruption-of-ccs-electric-vehicle-charging) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#brokenwire-wireless-disruption-of-ccs-electric-vehicle-charging)**
### 作者
* Sebastian Köhler, University of Oxford
* Richard Baker, University of Oxford
* Martin Strohmeier, armasuisse Science + Technology
* Ivan Martinovic, University of Oxford
### 摘要
> 我们提出了一种针对联合充电系统的新型攻击方法，该系统是电动汽车（EVs）最广泛采用的直流快速充电技术之一。我们的攻击名为Brokenwire，可以中断车辆和充电器之间必要的控制通信，导致充电会话中止。这种攻击只需要短暂的物理接近，并可以从远处无线进行，可以偷偷且同时地破坏个体车辆或整个车队。此外，它可以使用现成的无线电硬件和最低限度的技术知识进行实施。通过利用CSMA／CA行为，只需向受害者引入非常微弱的信号即可干扰通信，效果超过了宽带噪声干扰三个数量级。这种被利用的行为是HomePlug Green PHY、DIN 70121和ISO 15118标准的必要部分，所有已知的实现都表现出这种行为。
> 
> 
> 
> 
> 
> 
> 
> 我们首先在一个受控的实验环境中研究了攻击，然后在实际部署中对八辆车和20个充电器进行了演示。我们发现，该攻击在现实世界中的范围可以达到47米，在功率预算低于1瓦特的情况下也能成功进行。我们进一步展示了该攻击可以在建筑物的楼层之间（例如多层停车场），通过周界围栏和“驶过”攻击的方式进行。我们提出了一个启发式模型，用于估计在给定输出功率下可以同时攻击的车辆数量。
> 
> 
> 
> 
> 
> 
> 
> Brokenwire对全球约1200万辆电池电动汽车产生了直接影响，并对私企和关键公共服务以及电动公交车、卡车和小型船舶的新一波电气化产生了深远影响。因此，我们向行业进行了披露，并讨论了一系列可能用于限制影响的缓解技术。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/brokenwire-wireless-disruption-of-ccs-electric-vehicle-charging/](https://www.ndss-symposium.org/ndss-paper/brokenwire-wireless-disruption-of-ccs-electric-vehicle-charging/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-251-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-251-paper.pdf)
## CHKPLUG: Checking GDPR Compliance of WordPress Plugins via Cross-language Code Property Graph.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#chkplug-checking-gdpr-compliance-of-wordpress-plugins-via-cross-language-code-property-graph) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#chkplug-checking-gdpr-compliance-of-wordpress-plugins-via-cross-language-code-property-graph)**
### 作者
* Faysal Hossain Shezan, University of Virginia
* Zihao Su, University of Virginia
* Mingqing Kang, Johns Hopkins University
* Nicholas Phair, University of Virginia
* Patrick William Thomas, University of Virginia
* Michelangelo van Dam, in2it
* Yinzhi Cao, Johns Hopkins University
* Yuan Tian, UCLA
### 摘要
> WordPress，一个众所周知的内容管理系统（CMS），提供了所谓的插件来增强默认功能。部署WordPress插件的一个挑战性问题是，它们可能收集和处理用户数据，例如个人可识别信息（PII），通常受到类似《通用数据保护条例》（GDPR）的法律管制。据我们所知，以前没有研究过WordPress插件的GDPR合规性，因为这些插件通常涉及多种编程语言，例如PHP、JavaScript、HTML和SQL。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们设计了CHKPLUG，这是WordPress插件自动化GDPR检查器，用于检查其是否符合与PII相关的GDPR条款。CHKPLUG的关键是使用图查询将WordPress插件行为与GDPR条款进行匹配，利用一种新的跨语言代码属性图（CCPG）。具体而言，CCPG对内联语言集成（例如PHP和HTML）和键值相关连接（例如HTML和JavaScript）进行建模。如果在CCPG中找到特定的模式，CHKPLUG将报告GDPR违规行为。
> 
> 
> 
> 
> 
> 
> 
> 我们使用人工注释的WordPress插件对CHKPLUG进行了评估。评估结果显示，CHKPLUG在检查某个特定WordPress插件是否符合GDPR方面取得了良好的性能，真负率达到了98.8%，真正率达到了89.3%。为了调查市场的当前状态，我们进行了一项测量分析，结果显示有368个插件违反了数据删除规定，这意味着插件没有提供任何从网站上删除用户信息的功能。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/chkplug-checking-gdpr-compliance-of-wordpress-plugins-via-cross-language-code-property-graph/](https://www.ndss-symposium.org/ndss-paper/chkplug-checking-gdpr-compliance-of-wordpress-plugins-via-cross-language-code-property-graph/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-610-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-610-paper.pdf)
## SynthDB: Synthesizing Database via Program Analysis for Security Testing of Web Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#synthdb-synthesizing-database-via-program-analysis-for-security-testing-of-web-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#synthdb-synthesizing-database-via-program-analysis-for-security-testing-of-web-applications)**
### 作者
* An Chen, University of Georgia
* Jiho Lee, University of Virginia
* Basanta Chaulagain, University of Georgia
* Yonghwi Kwon, University of Virginia
* Kyu Hyung Lee, University of Georgia
### 摘要
> 测试基于数据库的Web应用程序具有挑战性，因为它们的行为（例如控制流）高度依赖于从SQL查询返回的数据。如果没有包含足够真实数据的数据库，很难达到潜在易受攻击代码片段，从而限制了现有各种基于动态安全测试方法的应用。然而，实际上获取用于测试的这种数据库是困难的，因为它通常包含敏感信息。分享数据库可能导致数据泄漏和隐私问题。在本文中，我们介绍了SYNTHDB，一种基于程序分析的数据库生成技术，用于基于数据库的PHP应用程序。SYNTHDB利用一个合作执行引擎来识别PHP代码库与SQL查询之间的交互。然后，它收集和解决各种约束条件，以重建一个数据库，可以在不违反数据库完整性的情况下探索未被发现的程序路径。我们的评估结果显示，SYNTHDB生成的数据库在17个真实PHP应用程序中的代码和查询覆盖率方面优于现有的数据库生成技术。具体而言，SYNTHDB生成的数据库实现了62.9%的代码覆盖率和77.1%的查询覆盖率，比最先进的技术分别提高了14.0%和24.2%的代码和查询覆盖率。此外，我们的安全分析结果显示，SYNTHDB有效地辅助现有的安全测试工具：Burp Suite，Wfuzz和webFuzz。在SYNTHDB的帮助下，Burp Suite可以发现76.8%的漏洞，而其他现有技术只能覆盖55.7%或更少的漏洞。令人印象深刻的是，使用SYNTHDB，Burp Suite从5个真实应用程序中发现了33个以前未知的漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/synthdb-synthesizing-database-via-program-analysis-for-security-testing-of-web-applications/](https://www.ndss-symposium.org/ndss-paper/synthdb-synthesizing-database-via-program-analysis-for-security-testing-of-web-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-632-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-632-paper.pdf)
## Hope of Delivery: Extracting User Locations From Mobile Instant Messengers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#hope-of-delivery-extracting-user-locations-from-mobile-instant-messengers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#hope-of-delivery-extracting-user-locations-from-mobile-instant-messengers)**
### 作者
* Theodor Schnitzler, Research Center Trustworthy Data Science and Security
### 摘要
> 手机即时通讯应用，比如WhatsApp，使用交付状态通知来告知用户发送的消息是否成功到达目的地。对于发件人来说，这是有用和重要的信息，因为即时通讯服务通常是异步的使用方式。然而，正如我们在本文中所示，这个标准功能会打开一个与用户位置隐私有关的时序侧信道，带来意想不到的后果。我们对三个广泛传播的即时通讯应用进行了概念和实验证明了这一威胁的存在性。我们验证了即使是像Signal和Threema这样注重隐私的通讯应用也存在信息泄露的问题。
> 
> 
> 
> 
> 
> 
> 
> 我们的结果表明，在训练阶段之后，通讯应用用户可以区分消息接收者的不同位置。我们进行了多轮测量和评估的分析表明，时序侧信道不受接收者位置之间距离的限制 -- 攻击在不同国家的接收者以及同一城市的小规模攻击都有效。例如，在同一城市的三个位置中，发件人可以以超过80%的准确率确定正确的位置。因此，通讯应用用户在发送即时消息时可以秘密监视彼此的行踪。根据我们的对策评估显示，通讯应用提供商可以通过在几秒钟的范围内随机延迟交付确认来有效地阻止时序侧信道攻击。对于用户来说，很难防止这种威胁，因为没有关闭交付确认的选项。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hope-of-delivery-extracting-user-locations-from-mobile-instant-messengers/](https://www.ndss-symposium.org/ndss-paper/hope-of-delivery-extracting-user-locations-from-mobile-instant-messengers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-188-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-188-paper.pdf)
## Tactics, Threats & Targets: Modeling Disinformation and its Mitigation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#tactics-threats-targets-modeling-disinformation-and-its-mitigation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#tactics-threats-targets-modeling-disinformation-and-its-mitigation)**
### 作者
* Shujaat Mirza, New York University
* Labeeba Begum, New York University Abu Dhabi
* Liang Niu, New York University
* Sarah Pardo, New York University Abu Dhabi
* Azza Abouzied, New York University Abu Dhabi
* Paolo Papotti, EURECOM
* Christina Pöpper, New York University Abu Dhabi
### 摘要
> 虚假信息可以被用来影响公众对特定政治或经济方向的看法，对公共卫生产生负面影响，并动员群体进行暴力抗命。在应对中存在一个重大挑战，即稀缺性：虚假信息广泛传播，但应对措施却很少。在这项工作中，我们对不同组织中从事解决问题信息的事实核查员、记者、信任和安全专家、研究人员和分析人员进行了采访。通过这项采访研究，我们了解到在不同领域应对虚假信息的实际情况，并利用我们的研究结果构建了一个受网络安全启发的框架来描述虚假信息的威胁。虽然相关研究已经开发出类似的框架来进行分析和评估，但我们的工作在于为彻底考虑攻击者方面，他们的战术和方法提供了手段。我们通过几个最近的虚假信息活动示例来证明我们的框架的适用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tactics-threats-targets-modeling-disinformation-and-its-mitigation/](https://www.ndss-symposium.org/ndss-paper/tactics-threats-targets-modeling-disinformation-and-its-mitigation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-657-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-657-paper.pdf)
## How to Count Bots in Longitudinal Datasets of IP Addresses.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#how-to-count-bots-in-longitudinal-datasets-of-ip-addresses) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#how-to-count-bots-in-longitudinal-datasets-of-ip-addresses)**
### 作者
* Leon Böck, Technische Universität Darmstadt
* Dave Levin, University of Maryland
* Ramakrishna Padmanabhan, CAIDA
* Christian Doerr, Hasso Plattner Institute
* Max Mühlhäuser, Technical University of Darmstadt
### 摘要
> 估算僵尸网络规模是在试图了解僵尸网络影响时可以进行的最基础和重要的查询之一。令人惊讶和不幸的是，这个看似简单的任务却困扰了许多测量工作。虽然只需计算已知受感染的IP地址数量似乎很诱人，但众所周知这样做可能会导致严重的过估计，因为ISP常常将新的IP地址分配给主机。因此，利用IP地址的纵向数据集估计受感染主机数量一直是一个悬而未决的问题。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种新的数据分析技术，称为CARDCount，通过考虑IP地址重新分配来提供更准确的规模估计。CARDCount可以在比之前的方法更长的观察窗口（以周为单位而不是小时）上应用，并且是首个为其规模估计提供置信区间的技术。我们对三个现实世界的数据集进行了CARDCount的评估，并展示了它在合成理想情况下与现有解决方案的相等表现，但在真实的僵尸网络情况下大大优于以往所有的工作。对于Hajime和Mirai僵尸网络，我们估计CARDCount在28天的观察窗口内，比最先进的技术在估计僵尸网络规模时准确性分别提高了51.6%和69.1%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/how-to-count-bots-in-longitudinal-datasets-of-ip-addresses/](https://www.ndss-symposium.org/ndss-paper/how-to-count-bots-in-longitudinal-datasets-of-ip-addresses/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-2-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-2-paper.pdf)
## Sometimes, You Aren't What You Do: Mimicry Attacks against Provenance Graph Host Intrusion Detection Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#sometimes-you-arent-what-you-do-mimicry-attacks-against-provenance-graph-host-intrusion-detection-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#sometimes-you-arent-what-you-do-mimicry-attacks-against-provenance-graph-host-intrusion-detection-systems)**
### 作者
* Akul Goyal, University of Illinois at Urbana-Champaign
* Xueyuan Han, Wake Forest University
* Gang Wang, University of Illinois at Urbana-Champaign
* Adam Bates, University of Illinois at Urbana-Champaign
### 摘要
> 可靠的主机层入侵检测方法一直是计算机安全中的一个悬而未决的问题。最近的研究将入侵检测重新定义为溯源图异常检测问题，这要归功于机器学习和因果图审计的并发进展。虽然这些方法显示出了潜力，但它们对于适应性对手的强大性尚未得到证明。具体而言，不清楚在现代基于图的方法中，是否存在类似于以往主机入侵检测方法中所遭受的模仿攻击。
> 
> 
> 
> 
> 
> 
> 
> 在本工作中，我们揭示了系统设计选择导致溯源图主机入侵检测系统（Prov-HIDS）中模仿攻击继续蔓延。通过对一组示例Prov-HIDS进行评估，我们开发了躲避战术，允许攻击者隐藏在良性进程行为中。通过对公开数据集的评估，我们证明攻击者可以在不修改基础攻击行为的情况下持续躲避检测（成功率达到100%）。我们还展示了我们的方法在实时攻击场景中的可行性，并且在领域通用对抗示例技术方面表现优越。通过公开源代码和数据集，本研究将成为未来Prov-HIDS评估的基准。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sometimes-you-arent-what-you-do-mimicry-attacks-against-provenance-graph-host-intrusion-detection-systems/](https://www.ndss-symposium.org/ndss-paper/sometimes-you-arent-what-you-do-mimicry-attacks-against-provenance-graph-host-intrusion-detection-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-207-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-207-paper.pdf)
## BinaryInferno: A Semantic-Driven Approach to Field Inference for Binary Message Formats.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#binaryinferno-a-semantic-driven-approach-to-field-inference-for-binary-message-formats) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#binaryinferno-a-semantic-driven-approach-to-field-inference-for-binary-message-formats)**
### 作者
* Jared Chandler, Tufts University
* Adam Wick, Fastly
* Kathleen Fisher, DARPA
### 摘要
> 我们提出了BinaryInferno，这是一个完全自动化的工具，用于反向工程二进制消息格式。给定一组具有相同格式的消息，该工具使用一组检测器推断出一系列的部分描述，然后自动将这些部分描述集成成一个语义上有意义的描述，可以用于解析未来具有相同格式的数据包。作为其集合，BinaryInferno使用了一套模块化且可扩展的目标检测器，包括用于识别诸如IEEE浮点数、时间戳和整数长度字段等原子数据类型的检测器；使用香农熵找到相邻字段之间的边界；并通过搜索常见的序列化习惯用法来发现可变长度序列。我们评估了BinaryInferno在从10种二进制协议中获取的数据包集上的性能。与先前的最新技术相比，我们的基于语义的方法显著降低了误报率，并提高了精确性。对于顶层协议，我们在字段边界的识别上平均精确性达到0.69，平均召回率为0.73，平均误报率为0.04，在同一数据集上明显优于其他五种最先进的协议反向工程工具：AWRE（0.18、0.03、0.04）、FIELDHUNTER（0.68、0.37、0.01）、NEMESYS（0.31、0.44、0.11）、NETPLIER（0.29、0.75、0.22）和NETZOB（0.57、0.42、0.03）。我们相信我们在精确性和误报率方面的改进代表了我们目标用户最想要的：具有更少误报的语义上有意义的描述。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/binaryinferno-a-semantic-driven-approach-to-field-inference-for-binary-message-formats/](https://www.ndss-symposium.org/ndss-paper/binaryinferno-a-semantic-driven-approach-to-field-inference-for-binary-message-formats/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-131-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-131-paper.pdf)
## Detecting Unknown Encrypted Malicious Traffic in Real Time via Flow Interaction Graph Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#detecting-unknown-encrypted-malicious-traffic-in-real-time-via-flow-interaction-graph-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#detecting-unknown-encrypted-malicious-traffic-in-real-time-via-flow-interaction-graph-analysis)**
### 作者
* Chuanpu Fu, Tsinghua University
* Qi Li, Tsinghua University
* Ke Xu, Tsinghua University
### 摘要
> 如今，互联网上的流量已被广泛加密以保护其机密性和隐私性。然而，流量加密常常被攻击者滥用以隐藏其恶意行为。由于加密的恶意流量与良性流量具有相似的特征，它很容易逃避传统的检测方法。特别是，现有的加密恶意流量检测方法是有监督的，并依赖于对已知攻击（例如，带标签的数据集）的先前知识。实时检测未知的加密恶意流量，而无需先前的领域知识，仍然是一个待解决的问题。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种名为HyperVision的实时无监督机器学习（ML）恶意流量检测系统。特别地，HyperVision能够通过利用基于流量模式构建的内存紧凑型图来检测未知的加密恶意流量模式。该图通过图结构特征来捕捉流量交互模式，而不是特定已知攻击的特征。我们开发了一种无监督的图学习方法，通过分析图的连接性、稀疏性和统计特征来检测异常交互模式，使得HyperVision能够检测各种加密攻击流量，而无需任何已知攻击的带标签数据集。此外，我们建立了一个信息理论模型来证明图所保留的信息接近理论上的理想界限。我们通过包括48个带有加密恶意流量的攻击的92个数据集的实际实验来展示HyperVision的性能。实验结果表明，HyperVision的AUC至少为0.92，F1至少为0.86，明显优于现有方法。特别是，在我们的实验中超过50%的攻击能够逃避所有这些方法。此外，HyperVision的检测吞吐量至少为80.6 Gb/s，平均检测延迟为0.83秒。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/detecting-unknown-encrypted-malicious-traffic-in-real-time-via-flow-interaction-graph-analysis/](https://www.ndss-symposium.org/ndss-paper/detecting-unknown-encrypted-malicious-traffic-in-real-time-via-flow-interaction-graph-analysis/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-80-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-80-paper.pdf)
## Efficient Dynamic Proof of Retrievability for Cold Storage.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#efficient-dynamic-proof-of-retrievability-for-cold-storage) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#efficient-dynamic-proof-of-retrievability-for-cold-storage)**
### 作者
* Tung Le, Virginia Tech
* Pengzhi Huang, Cornell University
* Attila A. Yavuz, University of South Florida
* Elaine Shi, CMU
* Thang Hoang, Virginia Tech
### 摘要
> 存储即服务（STaaS）允许客户将数据外包到云端，从而降低数据管理和维护成本。然而，STaaS也带来了数据完整性和健全性方面的重大担忧，因为存储提供商可能无法始终保持客户数据的完好和可检索性（例如，通过删除进行成本节省）。可检索性证明（PoR）可以有效验证远程数据的完整性和可检索性。这种技术在定期审核以监测数据泄露以及遵守标准数据规定方面非常有用。特别是在冷存储应用（例如MS Azure，Amazon Glacier）中，需要定期且频繁的审核，但数据修改频率较低。尽管存在这些优点，但现有的PoR技术通常关注其他指标（例如低存储，快速更新，元数据隐私），而不是审核效率（例如低审核时间，小证明大小）。因此，需要开发新的PoR技术，以实现高效的数据审核同时保持更新和检索性能。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了Porla，一种新的PoR框架，可以同时实现高效的数据审核、更新和检索功能。Porla允许在私有和公共环境中进行数据审核，每个环境都具有渐近地（以及具体地）更小的审核证明大小和较低的审核时间，而保持相同的渐近数据更新开销。Porla通过将纠删码与可验证计算技术组合实现了所有这些属性，这在我们的知识范围内是一种新的PoR设计方法。我们通过创建一种新的同态认证承诺方案来解决该组合中出现的一些挑战，这可能具有独立的兴趣。我们完全实现了Porla，并在各种设置下评估了它在商品云（即Amazon EC2）上的性能。实验结果表明，Porla在私有和公共审核设置中，审核证明大小比之前的所有方案小2至4个数量级，审核时间降低了4×-1,800×，而只增加了2×-3×的更新时间。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/efficient-dynamic-proof-of-retrievability-for-cold-storage/](https://www.ndss-symposium.org/ndss-paper/efficient-dynamic-proof-of-retrievability-for-cold-storage/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-307-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-307-paper.pdf)
## HeteroScore: Evaluating and Mitigating Cloud Security Threats Brought by Heterogeneity.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#heteroscore-evaluating-and-mitigating-cloud-security-threats-brought-by-heterogeneity) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#heteroscore-evaluating-and-mitigating-cloud-security-threats-brought-by-heterogeneity)**
### 作者
* Chongzhou Fang, University of California
### 摘要
> 云计算由于其计算能力、数据存储能力、可扩展性、软件/API集成以及方便的计费功能等特点，已经成为商业计算基础设施的关键部分。在云计算的早期阶段，大多数云都是同质化的，即大部分机器是相同的。已经证明，云中的异构性，即存在各种机器配置的情况，可以为应用程序提供更高的性能和功耗效率。这是因为异构性使应用程序能够在更适合的硬件/软件环境中运行。近年来，随着各种硬件的整合进入云系统，以满足日益多样化的用户应用需求，异构云的采用也越来越多。
> 
> 
> 
> 
> 
> 
> 
> 与此同时，安全威胁的出现，如微架构攻击，对云用户和提供者来说正在成为一个更加严重的问题。已经证明（例如Repttack和Cloak＆Co-locate），微架构攻击的先决条件——攻击和受害实例的共存，更容易在异构云中实现。这也意味着攻击的容易程度不仅与云的异构性有关，而且随着异构程度的增加而增加。然而，目前缺乏数值指标来定义、量化或比较一个云环境与另一个云环境的异构性。在本文中，我们提出了一种新的指标，称为Heterogeneity Score（HeteroScore），用于定量评估集群的异构性。我们证明HeteroScore与防止共存攻击的安全性密切相关。此外，我们还提出了权衡安全性与异构性之间关系的缓解技术。我们相信这是第一个对云异构性进行评估并将异构性与基础设施安全性联系起来的定量研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/heteroscore-evaluating-and-mitigating-cloud-security-threats-brought-by-heterogeneity/](https://www.ndss-symposium.org/ndss-paper/heteroscore-evaluating-and-mitigating-cloud-security-threats-brought-by-heterogeneity/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-996-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-996-paper.pdf)
## A Robust Counting Sketch for Data Plane Intrusion Detection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#a-robust-counting-sketch-for-data-plane-intrusion-detection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#a-robust-counting-sketch-for-data-plane-intrusion-detection)**
### 作者
* Sian Kim, Ewha Womans University
* Changhun Jung, Ewha Womans University
* RhongHo Jang, Wayne State University
* David Mohaisen, University of Central Florida
* DaeHun Nyang, Ewha Womans University
### 摘要
> 对于高速交换机的数据平面，越来越多的需求是测量流的统计信息。然而，数据平面的资源限制是最大的挑战。尽管现有的数据平面解决方案通过适应网络流量的Zipfian分布来提高内存效率，但由于静态数据结构，它们无法适应各种流大小分布。换句话说，在复杂的流量模式（如攻击）下，它们无法提供强大的流量测量。最近的研究表明，动态数据结构管理方案存在高复杂性，这是数据平面部署的主要障碍。在本文中，我们提出了一种名为"Count-Less sketch"的方法，它可以在各种流量分布下实现强大而准确的网络测量，而无需动态更新数据结构。Count-Less应用了一种新颖的草图更新策略，称为最小更新策略，它近似于Count-Min的保守更新策略，以适应网络交换机。我们不仅提出了Count-Less估计的理论证明，还通过估计准确性和吞吐量与Count-Min（基准）、Elastic sketch和FCM sketch进行了全面的实验结果对比。具体来说，我们提供了在各种倾斜度参数下的安全应用实验结果，包括估计误差。在所有测量任务中，Count-Less比Count-Min更准确，并且优于FCM sketch和Elastic sketch，而无需像TCAM这样的特殊硬件的帮助。为了证明它在高速交换机的数据平面中的可行性，我们在基于ASIC的可编程交换机（Tofino）上实现了基于P4语言的Count-Less原型，并进行了评估。就数据平面延迟而言，Count-Less比FCM快1.53倍，同时消耗的资源（如哈希位、SRAM和ALU）比可编程交换机少1.56倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-robust-counting-sketch-for-data-plane-intrusion-detection/](https://www.ndss-symposium.org/ndss-paper/a-robust-counting-sketch-for-data-plane-intrusion-detection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-102-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-102-paper.pdf)
## REDsec: Running Encrypted Discretized Neural Networks in Seconds.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#redsec-running-encrypted-discretized-neural-networks-in-seconds) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#redsec-running-encrypted-discretized-neural-networks-in-seconds)**
### 作者
* Lars Wolfgang Folkerts, University of Delaware
* Charles Gouert, University of Delaware
* Nektarios Georgios Tsoutsos, University of Delaware
### 摘要
> 机器学习作为一种服务（MLaaS）因开发时间长、数据量大、硬件成本高和所需专业知识水平而成为一种重要的技术。然而，隐私问题阻碍了MLaaS在涉及敏感数据的应用中的采用。一种有前景的隐私保护解决方案是使用完全同态加密（FHE）来执行机器学习计算。最近的进展大大降低了计算成本，为安全的实际应用开辟了新的机会。在这项工作中，我们介绍了REDsec框架，通过利用三值神经网络来优化基于FHE的私有机器学习推断。这种神经网络的权重受到限制，只能取{-1,0,1}，具有我们可以在同态域中高效操作的特殊属性。REDsec引入了新颖的特性，包括一种新的数据重用方案，首次在FHE中实现了整数与二进制域之间的双向桥接。这使我们能够实现非常高效的二进制乘法和激活操作，以及高效的整数域加法。我们的方法还得到了一个新的GPU加速库（称为REDcuFHE）的补充，该库支持多个GPU上的二进制和整数操作。REDsec通过支持用户定义模型作为输入（即bring-your-own-network）、明文训练的自动化和利用TFHE进行高效的私有推断评估，带来了独特的好处。在我们的分析中，我们对MNIST、CIFAR-10和ImageNet数据集进行推断实验，并与相关工作进行性能改进的比较。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/redsec-running-encrypted-discretized-neural-networks-in-seconds/](https://www.ndss-symposium.org/ndss-paper/redsec-running-encrypted-discretized-neural-networks-in-seconds/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-34-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-34-paper.pdf)
## DOITRUST: Dissecting On-chain Compromised Internet Domains via Graph Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#doitrust-dissecting-on-chain-compromised-internet-domains-via-graph-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#doitrust-dissecting-on-chain-compromised-internet-domains-via-graph-learning)**
### 作者
* Shuo Wang, CSIRO's Data61 & Cybersecurity CRC
### 摘要
> 传统的黑名单/白名单在限制终端用户访问域名方面仍然是对抗恶意网站的重要防御手段。然而，这些名单往往是不完整的，而且是被动的。在这项工作中，我们首先引入了一个扩展图，通过爬取超链接基于信任传递有机地生成互联网域名白名单。然后，我们突出了具有这样一个扩展图的监视节点的缺陷，即恶意节点深埋在受损网站的路径中，称为“链上妥协”。现有的网络恶意分析方法在识别稀疏标记图中的链上妥协方面存在隐蔽性（逃避检测）和大规模问题。为了应对揭示链上妥协的独特挑战，我们提出了一个两步集成方案DoITrust，利用个体节点特性和拓扑分析：（i）我们开发了一种半监督的疑似预测方案，用于预测节点与妥协目标（即被拒绝节点）相关的概率，包括一种新颖的节点排名方法作为高效的全局传播方案来结合拓扑信息，以及一种可扩展的图学习方案来将全局传播与局部预测模型的训练分离开来；（ii）基于疑似预测结果，我们提出了高效的修剪策略，进一步从爬取的图中去除高度可疑的节点，并分析妥协的潜在指标。实验证明，DoITrust在疑似预测中使用不到1%的标记节点即可达到90%的准确性，其学习能力优于现有的基于节点和结构的方法。我们还证明了DoITrust是可移植和实用的。我们手动审查了检测到的受损节点，发现其中至少94.55%的节点具有可疑内容，并调查了链上妥协的潜在指标。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/doitrust-dissecting-on-chain-compromised-internet-domains-via-graph-learning/](https://www.ndss-symposium.org/ndss-paper/doitrust-dissecting-on-chain-compromised-internet-domains-via-graph-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-322-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-322-paper.pdf)
## VICEROY: GDPR-/CCPA-compliant Enforcement of Verifiable Accountless Consumer Requests.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#viceroy-gdpr-ccpa-compliant-enforcement-of-verifiable-accountless-consumer-requests) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#viceroy-gdpr-ccpa-compliant-enforcement-of-verifiable-accountless-consumer-requests)**
### 作者
* Scott Jordan, University of California
### 摘要
> 最近的数据保护法规（特别是GDPR和CCPA）赋予消费者各种权利，包括访问、修改或删除服务提供商收集并保留的与他们有关的任何个人信息的权利。为了行使这些权利，必须提交可验证的消费者请求，证明收集的数据确实属于他们。对于在数据收集时与服务提供商有活跃账户的消费者来说，这个过程很简单，因为他们可以使用标准的（例如基于密码的）身份验证手段来验证他们的请求。然而，对于没有账户的消费者来说，支持他们行使权利会带来一个重大难题。为此，一些服务提供商开始要求这些没有账户的消费者透露并证明他们的身份（例如使用政府发行的文件、水电费账单或信用卡号码），作为签发可验证的消费者请求的一部分。虽然可以理解为短期解决方案，但这种方法对于服务提供商来说既繁琐又昂贵，对于消费者来说也侵犯了隐私。
> 
> 
> 
> 
> 
> 
> 
> 因此，迫切需要提供更好的方式来验证没有账户的消费者的请求。为了实现这一目标，我们提出了VICEROY，一种隐私保护和可扩展的框架，用于生成数据所有权的证明，为可验证的消费者请求奠定基础。基于现有的网络技术和特性，VICEROY允许没有账户的消费者与服务提供商进行交互，并以隐私保护的方式证明他们是同一个人，同时对双方都需要最小的改变。我们在安全性/隐私性、可部署性和可用性方面设计和实现了VICEROY，并通过广泛的实验评估了它的实用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-336/](https://www.ndss-symposium.org/ndss-paper/auto-draft-336/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-74-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-74-paper.pdf)
## Navigating Murky Waters: Automated Browser Feature Testing for Uncovering Tracking Vectors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#navigating-murky-waters-automated-browser-feature-testing-for-uncovering-tracking-vectors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#navigating-murky-waters-automated-browser-feature-testing-for-uncovering-tracking-vectors)**
### 作者
* Mir Masood Ali, University of Illinois Chicago
* Binoy Chitale, Stony Brook University
* Mohammad Ghasemisharif, University of Illinois Chicago
* Chris Kanich, University of Illinois Chicago
* Nick Nikiforakis, Stony Brook University
* Jason Polakis, University of Illinois Chicago
### 摘要
> 现代网络浏览器构成了具有各种API和功能的复杂应用平台。关键是，这包括一系列异构机制，允许网站存储显式或隐式改变客户端状态或功能的信息。此行为将任何浏览器存储、缓存、访问控制和策略机制都视为潜在的跟踪向量。正如之前的研究所示，跟踪向量可以通过复杂的行为表现出来，在不同的浏览环境中具有不同的特征。在本文中，我们开发了一个自动化的、机制无关的框架CanITrack，用于测试浏览器功能并发现新的跟踪向量。我们的系统旨在通过简化浏览器机制的系统测试，为浏览器供应商和研究人员提供便利。它接受用于读取和写入机制条目的方法，并调用这些方法来确定该机制可能暴露的任何潜在跟踪漏洞。为了展示我们系统的能力，我们测试了21种浏览器机制，并发现了一系列跟踪向量，包括13种允许第三方跟踪的向量和两种绕过隐私浏览模式提供的隔离的向量。重要的是，我们展示了如何利用Google广为人知且广泛讨论的隐私沙盒计划中的两种不同机制进行跟踪。我们的实验结果共产生了20份公开报告，涉及了七种主要浏览器，已经启动了整改工作。总的来说，我们的研究突显了浏览器当前在尝试平衡采用新功能和保护用户隐私方面所面临的复杂而严峻的挑战，以及将CanITrack纳入内部测试流程的潜在好处。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/navigating-murky-waters-automated-browser-feature-testing-for-uncovering-tracking-vectors/](https://www.ndss-symposium.org/ndss-paper/navigating-murky-waters-automated-browser-feature-testing-for-uncovering-tracking-vectors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f72_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f72_paper.pdf)
## ChargePrint: A Framework for Internet-Scale Discovery and Security Analysis of EV Charging Management Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#chargeprint-a-framework-for-internet-scale-discovery-and-security-analysis-of-ev-charging-management-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#chargeprint-a-framework-for-internet-scale-discovery-and-security-analysis-of-ev-charging-management-systems)**
### 作者
* Tony Nasr, Concordia University
* Sadegh Torabi, George Mason University
* Elias Bou-Harb, University of Texas at San Antonio
* Claude Fachkha, University of Dubai
* Chadi Assi, Concordia University
### 摘要
> 电动车充电管理系统（EVCMS）是一组专门的软件，允许用户远程操作电动车充电站（EVCS）。随着支持全球不断增长的电动车队的部署电动车充电站数量的增加，EVCMS的数量也在不断增长，这引入了新的攻击面。在本文中，我们提出了一个新颖的多阶段框架ChargePrint，用于发现连接互联网的EVCMS并调查其安全状况。ChargePrint利用从少量EVCMS中提取的标识符，通过迭代指纹识别和分类与聚类方法的组合，扩展了设备搜索引擎的功能。通过从1800个已发现的主机中获取初始种子，这些主机部署了9种不同的EVCMS，我们发现了27439个在线的EVCS，这些EVCS由44种独特的EVCMS控制。因此，我们的深度安全分析揭示了部署的EVCMS的不安全性，发现了120个零日漏洞，这为对EVCS、其用户和连接的电网进行网络攻击的可行性提供了线索。最后，虽然我们建议采取对策来减轻未来的威胁，但我们通过与系统开发者/供应商进行协调漏洞披露（CVD）工作，提交的漏洞获得了超过20个CVE-ID，从而为EVCS生态系统的安全做出了贡献。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/chargeprint-a-framework-for-internet-scale-discovery-and-security-analysis-of-ev-charging-management-systems/](https://www.ndss-symposium.org/ndss-paper/chargeprint-a-framework-for-internet-scale-discovery-and-security-analysis-of-ev-charging-management-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-84-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-84-paper.pdf)
## A Systematic Study of the Consistency of Two-Factor Authentication User Journeys on Top-Ranked Websites.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#a-systematic-study-of-the-consistency-of-two-factor-authentication-user-journeys-on-top-ranked-websites) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#a-systematic-study-of-the-consistency-of-two-factor-authentication-user-journeys-on-top-ranked-websites)**
### 作者
* Sanam Ghorbani Lyastani, CISPA Helmholtz Center for Information Security
### 摘要
> 启发式方法对用户体验表明，用户会将他们对一个产品的期望转移到另一个产品上。产品之间一致性的缺乏可能会增加用户的认知摩擦，导致沮丧和拒绝。本文首次系统研究了排名靠前的网站上两步验证用户流程的外部功能一致性。我们发现这些网站只以最低限度一致地实现了一些设计方面（例如设置的命名和位置），但在设置和使用第二因素方面展现出混合的设计模式。此外，我们发现一些较为一致实现的方面，例如关于两步验证的描述，已被文献描述为对用户体验有问题和不利的。我们的结果倡导为双因素认证实施者制定更普遍的用户体验准则，并提出了关于双因素认证用户流程的新研究问题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-systematic-study-of-the-consistency-of-two-factor-authentication-user-journeys-on-top-ranked-websites/](https://www.ndss-symposium.org/ndss-paper/a-systematic-study-of-the-consistency-of-two-factor-authentication-user-journeys-on-top-ranked-websites/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-362-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-362-paper.pdf)
## Privacy-Preserving Database Fingerprinting.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#privacy-preserving-database-fingerprinting) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#privacy-preserving-database-fingerprinting)**
### 作者
* Tianxi Ji, Texas Tech University
* Erman Ayday, Case Western Reserve University
* Emre Yilmaz, University of Houston-Downtown
* Ming Li, CSE Department The University of Texas at Arlington
* Pan Li, Case Western Reserve University
### 摘要
> 当与其他方共享关系数据库时，除了向接收方提供高质量的（实用的）数据库外，数据库所有者还希望通过数据条目的隐私保证和责任保证（通过指纹识别）来防止未经授权的再分发。然而，隐私保证和责任保证是独立的目标，因为当与多个接收方共享数据库时，通过数据清理实现隐私需要添加一次噪音（并与所有接收方共享相同的噪音版本），而通过唯一指纹插入实现责任保证需要对每个共享副本添加不同的噪音以区分所有接收方。虽然可以通过简单地（例如，差分隐私数据库扰动或合成后进行指纹识别）来同时实现（i）和（ii），但这种方法会导致共享数据库的效用显著降低。在本文中，我们通过提出一种新颖的入口级差分隐私（DP）指纹机制，同时实现隐私和责任保证，而不会导致较大的效用降低。
> 
> 
> 
> 
> 
> 
> 
> 所提出的机制通过利用指纹的随机化特性，并将其转化为可证明的隐私保证，实现隐私和责任要求的满足。具体而言，我们设计了一种位级随机响应方案，以实现在共享整个数据库时对任意数据条目的差分隐私保证，然后基于此，我们开发了一个ε-入口级DP指纹机制。我们通过推导闭式表达式理论分析了隐私、指纹鲁棒性和数据库效用之间的联系。我们还提出了一种基于稀疏向量技术的解决方案，用于在将数据库的指纹副本与多个接收方共享时控制累积隐私损失。
> 
> 
> 
> 
> 
> 
> 
> 通过实验证明，我们的机制实现了较强的指纹鲁棒性（例如，即使恶意数据库接收方修改/扭曲了其接收到的指纹副本中一半以上的条目，指纹也不会受到损害），并且比各种基准方法具有更高的数据库效用（例如，由所提出的机制实现的共享数据库的应用相关效用高于考虑的基准方法）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/privacy-preserving-database-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/privacy-preserving-database-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-693-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-693-paper.pdf)
## Folk Models of Misinformation on Social Media.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#folk-models-of-misinformation-on-social-media) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#folk-models-of-misinformation-on-social-media)**
### 作者
* Filipo Sharevski, DePaul University
* Amy Devine, DePaul University
* Emma Pieroni, DePaul University
* Peter Jachim, DePaul University
### 摘要
> 在本研究中，我们通过对235位社交媒体用户的样本进行调查，探讨了社交媒体上存在的“民间误传模式”。社交媒体误传的研究往往没有涉及普通用户如何处理这一问题，而主要关注的是误传所带来的紧张情绪、焦虑或分歧。仅研究结构方面也忽视了社交媒体用户如何内化误传信息，因此很容易对“接种疫苗”策略进行推测，认为缺乏对误传的免疫力。然而，用户如何应对社交媒体内容以发展“自然免疫力”，作为对误传的抵抗能力，仍然是一个悬而未决的问题。我们至少确定了五种“民间误传模式”，将误传理解为：政治（对抗）论述、脱离背景的叙述、本质上错误的信息、外部宣传，或仅仅是娱乐。我们利用这些民间误传模式所体现的丰富概念，揭示社交媒体用户如何在日常生活中最小化对误传信息的不良反应。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/folk-models-of-misinformation-on-social-media/](https://www.ndss-symposium.org/ndss-paper/folk-models-of-misinformation-on-social-media/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-293-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-293-paper.pdf)
## Fine-Grained Trackability in Protocol Executions.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#fine-grained-trackability-in-protocol-executions) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202023.md#fine-grained-trackability-in-protocol-executions)**
### 作者
* Ksenia Budykho, Surrey Centre for Cyber Security
### 摘要
> 我们引入了一个新的框架TrackDev，用于对实体（例如设备）通过其协议执行或系统使用来进行追踪或"跟踪"的编码和分析。TrackDev考虑了多个维度的组合：攻击者是活动还是被动的，实体在其每个单独出现中是否可追踪或仅在其复合集合中可追踪，以及实体是否可以明确地或隐式地被识别。
> 
> 
> 
> 
> 
> 
> 
> TrackDev可以应用于大多数基于识别的系统。TrackDev将在实践中应用于系统的实际执行过程中；为此，我们在两个着名的协议LoRaWAN Join和5G切换的真实流量上测试了TrackDev，展示了其中的新的可追踪性攻击并提出了对策。
> 
> 
> 
> 
> 
> 
> 
> 我们研究了TrackDev的各种可追踪性属性的强度，并且展示了我们的许多概念在彼此之间是不可比较的，从而证明了TrackDev的细粒度性质的合理性。
> 
> 
> 
> 
> 
> 
> 
> 最后，我们详细介绍了如何在形式验证工具中机械化TrackDev的主要推动力，而不会损失任何内容；我们以LoRaWAN Join和Tamarin证明器为例进行了完整的演示。在这个过程中，我们还发现并讨论了两个重要方面：(a) TrackDev在"显式"和"隐式"可追踪性之间的区分提供了新的形式验证见解；(b) 我们在Tamarin中对LoRaWAN Join协议进行的与TrackDev的分析以及与Baelde等人提出的不可链接性的现有近似方法的对比研究具体显示出后者的近似方法可能比我们的概念粗略得多。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fine-grained-trackability-in-protocol-executions/](https://www.ndss-symposium.org/ndss-paper/fine-grained-trackability-in-protocol-executions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2023-289-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2023-289-paper.pdf)
